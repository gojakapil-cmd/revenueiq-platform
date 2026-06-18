import type { RevenueEstimate } from "@/types/revenue";

export interface RevenueEngineInput {
  monthlyViews: number;
  niche: string;
  country: string;
  subscribers: number;
}

export interface RevenueEngineResult {
  estimatedRevenue: number;
  estimatedRPM: number;
  confidenceScore: number;
  explanation: string;
}

type RpmDatabase = Record<string, Record<string, number>>;

const RPM_DATABASE: RpmDatabase = {
  India: {
    Education: 0.8,
    Tech: 1.2,
    Finance: 2.5,
    Gaming: 0.6,
  },
  "United States": {
    Education: 4,
    Tech: 6,
    Finance: 12,
    Gaming: 3,
  },
};

const COUNTRY_MULTIPLIERS: Record<string, number> = {
  India: 1.0,
  "United States": 3.5,
  UK: 2.8,
  Canada: 2.5,
};

const BASE_RPM_BY_NICHE: Record<string, number> = {
  Education: 0.8,
  Tech: 1.2,
  Finance: 2.5,
  Gaming: 0.6,
};

const DEFAULT_RPM = 1;
const DEFAULT_COUNTRY_MULTIPLIER = 1;

function normalizeValue(value: string): string {
  return value.trim().toLowerCase();
}

function resolveKnownKey<T extends Record<string, unknown>>(
  value: string,
  source: T,
): keyof T | undefined {
  const normalizedValue = normalizeValue(value);

  return Object.keys(source).find(
    (key) => normalizeValue(key) === normalizedValue,
  ) as keyof T | undefined;
}

function resolveCountry(country: string): string | undefined {
  const aliases: Record<string, string> = {
    "united kingdom": "UK",
    britain: "UK",
    england: "UK",
    us: "United States",
    usa: "United States",
    "u.s.": "United States",
    "u.s.a.": "United States",
  };
  const normalizedCountry = normalizeValue(country);

  return (
    aliases[normalizedCountry] ??
    resolveKnownKey(country, COUNTRY_MULTIPLIERS) ??
    resolveKnownKey(country, RPM_DATABASE)
  );
}

function resolveNiche(niche: string): string | undefined {
  return resolveKnownKey(niche, BASE_RPM_BY_NICHE);
}

function getEstimatedRpm(niche: string, country: string): number {
  const knownCountry = resolveCountry(country);
  const knownNiche = resolveNiche(niche);

  if (knownCountry && knownNiche && RPM_DATABASE[knownCountry]?.[knownNiche]) {
    return RPM_DATABASE[knownCountry][knownNiche];
  }

  const baseRpm = knownNiche ? BASE_RPM_BY_NICHE[knownNiche] : DEFAULT_RPM;
  const countryMultiplier = knownCountry
    ? COUNTRY_MULTIPLIERS[knownCountry] ?? DEFAULT_COUNTRY_MULTIPLIER
    : DEFAULT_COUNTRY_MULTIPLIER;

  return roundCurrency(baseRpm * countryMultiplier);
}

function getConfidenceScore(niche: string, country: string, subscribers: number): number {
  const knownNiche = Boolean(resolveNiche(niche));
  const knownCountry = Boolean(resolveCountry(country));
  const subscriberScore = getSubscriberConfidence(subscribers);
  const confidence =
    40 + (knownNiche ? 20 : 0) + (knownCountry ? 20 : 0) + subscriberScore;

  return clamp(Math.round(confidence), 30, 95);
}

function getSubscriberConfidence(subscribers: number): number {
  if (subscribers >= 1_000_000) {
    return 15;
  }

  if (subscribers >= 250_000) {
    return 12;
  }

  if (subscribers >= 100_000) {
    return 9;
  }

  if (subscribers >= 10_000) {
    return 5;
  }

  return 0;
}

function buildExplanation(
  input: RevenueEngineInput,
  estimatedRpm: number,
): string {
  const countryLabel = formatCountryForExplanation(input.country);

  return `Based on ${formatLabel(input.niche)} niche, ${countryLabel} audience, ${formatCompactNumber(
    input.monthlyViews,
  )} monthly views and estimated RPM of $${formatRpm(estimatedRpm)}`;
}

function formatCountryForExplanation(country: string): string {
  const resolvedCountry = resolveCountry(country) ?? country;

  if (resolvedCountry === "India") {
    return "Indian";
  }

  if (resolvedCountry === "United States") {
    return "United States";
  }

  if (resolvedCountry === "UK") {
    return "UK";
  }

  if (resolvedCountry === "Canada") {
    return "Canadian";
  }

  return formatLabel(resolvedCountry);
}

function formatLabel(value: string): string {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return "Unknown";
  }

  return trimmedValue
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

function formatCompactNumber(value: number): string {
  return Intl.NumberFormat("en", {
    maximumFractionDigits: 1,
    notation: "compact",
  }).format(value);
}

function formatRpm(value: number): string {
  return Number.isInteger(value) ? value.toString() : value.toFixed(2).replace(/0$/, "");
}

function roundCurrency(value: number): number {
  return Math.round(value * 100) / 100;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function estimateRevenue(input: RevenueEngineInput): RevenueEngineResult {
  const monthlyViews = Math.max(0, input.monthlyViews);
  const estimatedRPM = getEstimatedRpm(input.niche, input.country);
  const estimatedRevenue = roundCurrency((monthlyViews / 1_000) * estimatedRPM);

  return {
    estimatedRevenue,
    estimatedRPM,
    confidenceScore: getConfidenceScore(
      input.niche,
      input.country,
      input.subscribers,
    ),
    explanation: buildExplanation(
      {
        ...input,
        monthlyViews,
      },
      estimatedRPM,
    ),
  };
}

export async function getRevenueEstimate(
  channelId = "channel_creator_pulse",
): Promise<RevenueEstimate & RevenueEngineResult> {
  const estimate = estimateRevenue({
    monthlyViews: 18_700_000,
    niche: "Tech",
    country: "United States",
    subscribers: 2_480_000,
  });

  return {
    channelId,
    ...estimate,
    currency: "USD",
    range: {
      min: roundCurrency(estimate.estimatedRevenue * 0.8),
      max: roundCurrency(estimate.estimatedRevenue * 1.2),
    },
  };
}

export { COUNTRY_MULTIPLIERS, RPM_DATABASE };

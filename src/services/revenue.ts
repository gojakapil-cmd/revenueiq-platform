import type { RevenueEstimate } from "@/types/revenue";

export async function getRevenueEstimate(
  channelId = "channel_creator_pulse",
): Promise<RevenueEstimate> {
  return {
    channelId,
    estimatedRevenue: 97000,
    confidenceScore: 92,
    estimatedRPM: 6.85,
    currency: "USD",
    range: {
      min: 78000,
      max: 116000,
    },
  };
}

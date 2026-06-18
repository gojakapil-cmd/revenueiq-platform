import type { Channel } from "./channel";
import type { RevenueEstimate } from "./revenue";

export interface DashboardMetric {
  label: string;
  value: string;
  delta: string;
}

export interface DashboardSummary {
  totalChannelsTracked: number;
  averageConfidenceScore: number;
  monthlyRevenueEstimate: number;
  topChannel: Channel;
}

export interface DashboardSnapshot {
  summary: DashboardSummary;
  metrics: DashboardMetric[];
  revenueEstimate: RevenueEstimate;
}

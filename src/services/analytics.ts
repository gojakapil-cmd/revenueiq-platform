import type { DashboardSnapshot } from "@/types/dashboard";
import type { AudienceAnalysis } from "@/types/channel";
import { getRevenueEstimate } from "./revenue";
import { getAudienceAnalysis as getYouTubeAudienceAnalysis, getChannel } from "./youtube";

export async function getAudienceAnalysis(
  channelId?: string,
): Promise<AudienceAnalysis> {
  return getYouTubeAudienceAnalysis(channelId);
}

export async function getDashboardSnapshot(): Promise<DashboardSnapshot> {
  const channel = await getChannel();
  const revenueEstimate = await getRevenueEstimate(channel.id);

  return {
    summary: {
      totalChannelsTracked: 128,
      averageConfidenceScore: 89,
      monthlyRevenueEstimate: revenueEstimate.estimatedRevenue,
      topChannel: channel,
    },
    metrics: [
      { label: "Monthly Views", value: "18.7M", delta: "+6.9%" },
      { label: "Subscribers", value: "2.48M", delta: "+5.2%" },
      { label: "Estimated RPM", value: "$6.85", delta: "+3.4%" },
      { label: "Confidence Score", value: "92%", delta: "+1.8%" },
    ],
    revenueEstimate,
  };
}

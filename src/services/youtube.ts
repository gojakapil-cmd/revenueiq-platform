import type { AudienceAnalysis, Channel } from "@/types/channel";

const mockChannel: Channel = {
  id: "channel_creator_pulse",
  name: "Creator Pulse",
  subscribers: 2480000,
  views: 418600000,
  videos: 684,
  niche: "Creator Economy",
  country: "United States",
};

export async function getChannel(channelId = mockChannel.id): Promise<Channel> {
  return {
    ...mockChannel,
    id: channelId,
  };
}

export async function getAudienceAnalysis(
  channelId = mockChannel.id,
): Promise<AudienceAnalysis> {
  return {
    channelId,
    primaryCountry: "United States",
    topCountries: [
      { country: "United States", percentage: 38 },
      { country: "India", percentage: 22 },
      { country: "United Kingdom", percentage: 14 },
      { country: "Canada", percentage: 9 },
      { country: "Other Markets", percentage: 17 },
    ],
    audienceFitScore: 91,
    summary:
      "Strong monetization fit driven by high-value English-speaking markets and creator economy audience intent.",
  };
}

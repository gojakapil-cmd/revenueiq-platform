import type { Channel } from "@/types/channel";
import { getChannel } from "@/services/youtube";

export interface ChannelSearchResult {
  slug: string;
  channel: Channel;
}

export function toChannelSlug(channelName: string): string {
  return channelName
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export async function searchChannel(channelName: string): Promise<ChannelSearchResult> {
  const slug = toChannelSlug(channelName);
  if (!slug) {
    throw new Error("Channel name is required for search.");
  }

  const channel = await getChannel();

  return {
    slug,
    channel: {
      ...channel,
      id: `channel_${slug}`,
      name: channelName.trim(),
    },
  };
}

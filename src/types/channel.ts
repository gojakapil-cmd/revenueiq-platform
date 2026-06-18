export interface Channel {
  id: string;
  name: string;
  subscribers: number;
  views: number;
  videos: number;
  niche: string;
  country: string;
}

export interface AudienceSegment {
  country: string;
  percentage: number;
}

export interface AudienceAnalysis {
  channelId: string;
  primaryCountry: string;
  topCountries: AudienceSegment[];
  audienceFitScore: number;
  summary: string;
}

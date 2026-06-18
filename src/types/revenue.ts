export interface Revenue {
  estimatedRevenue: number;
  confidenceScore: number;
  estimatedRPM: number;
}

export interface RevenueEstimate extends Revenue {
  channelId: string;
  currency: "USD";
  range: {
    min: number;
    max: number;
  };
}

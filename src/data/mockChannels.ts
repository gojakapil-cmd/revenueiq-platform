export interface TrendingChannel {
  name: string;
  category: string;
  subscribers: string;
  estimatedRevenue: string;
  growth: string;
  confidence: string;
}

export interface ChannelDetail {
  name: string;
  handle: string;
  category: string;
  subscribers: string;
  totalViews: string;
  videos: string;
  estimatedRevenue: string;
  confidenceScore: string;
  monthlyViews: string;
  averageRpm: string;
  uploadCadence: string;
}

export interface AudienceDistributionItem {
  label: string;
  value: string;
  color: string;
  width: string;
}

export interface NicheSignal {
  label: string;
  value: string;
}

export interface GrowthTrendItem {
  month: string;
  views: string;
  growth: string;
}

export const trendingChannels: TrendingChannel[] = [
  {
    name: "Tech Daily",
    category: "Technology",
    subscribers: "2.4M",
    estimatedRevenue: "$85K - $125K",
    growth: "+12.5%",
    confidence: "92%",
  },
  {
    name: "Creative Minds",
    category: "Entertainment",
    subscribers: "1.8M",
    estimatedRevenue: "$62K - $95K",
    growth: "+8.3%",
    confidence: "88%",
  },
  {
    name: "Gaming Universe",
    category: "Gaming",
    subscribers: "3.2M",
    estimatedRevenue: "$105K - $165K",
    growth: "+15.2%",
    confidence: "94%",
  },
  {
    name: "Business Insights",
    category: "Business",
    subscribers: "1.2M",
    estimatedRevenue: "$45K - $72K",
    growth: "+5.8%",
    confidence: "85%",
  },
  {
    name: "Lifestyle & Travel",
    category: "Lifestyle",
    subscribers: "950K",
    estimatedRevenue: "$35K - $58K",
    growth: "+9.1%",
    confidence: "86%",
  },
  {
    name: "Education Hub",
    category: "Education",
    subscribers: "2.1M",
    estimatedRevenue: "$78K - $118K",
    growth: "+11.4%",
    confidence: "91%",
  },
];

export const channel: ChannelDetail = {
  name: "Creator Pulse",
  handle: "@creatorpulse",
  category: "Creator Economy",
  subscribers: "2.48M",
  totalViews: "418.6M",
  videos: "684",
  estimatedRevenue: "$78K - $116K",
  confidenceScore: "92%",
  monthlyViews: "18.7M",
  averageRpm: "$6.85",
  uploadCadence: "4.2 videos / week",
};

export const audienceDistribution: AudienceDistributionItem[] = [
  { label: "United States", value: "38%", color: "bg-indigo-500", width: "w-[38%]" },
  { label: "India", value: "22%", color: "bg-emerald-500", width: "w-[22%]" },
  { label: "United Kingdom", value: "14%", color: "bg-sky-500", width: "w-[14%]" },
  { label: "Canada", value: "9%", color: "bg-amber-500", width: "w-[9%]" },
  { label: "Other Markets", value: "17%", color: "bg-slate-400", width: "w-[17%]" },
];

export const nicheSignals: NicheSignal[] = [
  { label: "Primary Niche", value: "Creator Monetization" },
  { label: "Secondary Niche", value: "Audience Growth" },
  { label: "Content Format", value: "Analysis, Tutorials, Interviews" },
  { label: "Brand Safety", value: "High" },
];

export const growthTrend: GrowthTrendItem[] = [
  { month: "Jan", views: "12.4M", growth: "+4.8%" },
  { month: "Feb", views: "13.1M", growth: "+5.6%" },
  { month: "Mar", views: "14.8M", growth: "+8.9%" },
  { month: "Apr", views: "16.2M", growth: "+9.4%" },
  { month: "May", views: "17.5M", growth: "+8.0%" },
  { month: "Jun", views: "18.7M", growth: "+6.9%" },
];

export const aiInsights: string[] = [
  "Revenue reliability is strong because upload cadence, RPM range, and audience geography are consistent.",
  "Short-form discovery is driving top-of-funnel growth, while long-form explainers convert the highest watch time.",
  "Sponsorship potential is above category average due to business-focused audience intent and high comment quality.",
];

export const revenueBreakdown = [
  { source: "AdSense Revenue", value: "$52K - $68K", share: "58%" },
  { source: "Sponsorship Potential", value: "$18K - $32K", share: "26%" },
  { source: "Affiliate Revenue", value: "$6K - $11K", share: "10%" },
  { source: "Memberships & Products", value: "$2K - $5K", share: "6%" },
];

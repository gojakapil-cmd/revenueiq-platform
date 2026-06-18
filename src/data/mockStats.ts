export interface StatCard {
  label: string;
  value: string;
  trend: string;
  trendValue: string;
  trendDirection: "up" | "down";
}

export interface FeatureCard {
  title: string;
  description: string;
  iconBg: string;
}

export interface StepCard {
  number: string;
  title: string;
  description: string;
}

export interface FrameworkCard {
  title: string;
  description: string;
  color: string;
}

export interface ComparisonRow {
  feature: string;
  traditionalAnalytics: string;
  revenueIQ: string;
}

export const stats: StatCard[] = [
  {
    label: "Channels Analyzed",
    value: "50,000+",
    trend: "vs last month",
    trendValue: "+18.5%",
    trendDirection: "up",
  },
  {
    label: "Revenue Accuracy",
    value: "94.5%",
    trend: "vs baseline",
    trendValue: "+2.3%",
    trendDirection: "up",
  },
  {
    label: "Countries Covered",
    value: "192",
    trend: "all regions",
    trendValue: "+12%",
    trendDirection: "up",
  },
];

export const features: FeatureCard[] = [
  {
    title: "Revenue Intelligence",
    description: "AI-powered estimation of YouTube channel revenue with real-time accuracy.",
    iconBg: "bg-blue-100",
  },
  {
    title: "Audience Analysis",
    description: "Deep insights into channel demographics, interests, and engagement patterns.",
    iconBg: "bg-purple-100",
  },
  {
    title: "Growth Prediction",
    description: "Forecast future growth trends and subscriber projections using ML models.",
    iconBg: "bg-green-100",
  },
  {
    title: "Niche Detection",
    description: "Automatically identify content categories and target audience segments.",
    iconBg: "bg-amber-100",
  },
  {
    title: "Market Insights",
    description: "Compare performance metrics against similar channels in your niche.",
    iconBg: "bg-pink-100",
  },
  {
    title: "Confidence Score",
    description: "Transparent confidence ratings on all estimates and predictions.",
    iconBg: "bg-indigo-100",
  },
];

export const steps: StepCard[] = [
  {
    number: "01",
    title: "Analyze Channel",
    description: "Input any YouTube channel URL and we extract core data in seconds.",
  },
  {
    number: "02",
    title: "AI Detects Niche & Audience",
    description: "Our algorithms identify content category, target demographics, and viewer behavior.",
  },
  {
    number: "03",
    title: "Revenue Intelligence Engine",
    description: "Machine learning models estimate revenue using 50+ proprietary data signals.",
  },
  {
    number: "04",
    title: "Confidence Score Generated",
    description: "Receive detailed insights with transparency on model confidence and accuracy.",
  },
];

export const framework: FrameworkCard[] = [
  {
    title: "Audience Analysis",
    description: "Demographic profiling, interest mapping, and viewer lifecycle modeling.",
    color: "border-l-4 border-blue-500",
  },
  {
    title: "Niche Intelligence",
    description: "Content category classification and market positioning analysis.",
    color: "border-l-4 border-purple-500",
  },
  {
    title: "Upload Consistency",
    description: "Publishing patterns, frequency analysis, and content calendar insights.",
    color: "border-l-4 border-green-500",
  },
  {
    title: "Engagement Signals",
    description: "Like ratios, comment depth, viewer retention, and interaction patterns.",
    color: "border-l-4 border-amber-500",
  },
  {
    title: "Revenue Modeling",
    description: "CPM analysis, monetization potential, and sponsor value estimation.",
    color: "border-l-4 border-pink-500",
  },
];

export const comparisonData: ComparisonRow[] = [
  { feature: "Revenue Estimate", traditionalAnalytics: "Basic", revenueIQ: "AI-Powered" },
  { feature: "Transparency", traditionalAnalytics: "Limited", revenueIQ: "Complete" },
  { feature: "Confidence Score", traditionalAnalytics: "❌", revenueIQ: "✅" },
  { feature: "AI Analysis", traditionalAnalytics: "❌", revenueIQ: "✅" },
  { feature: "Audience Intelligence", traditionalAnalytics: "Limited", revenueIQ: "Advanced" },
];

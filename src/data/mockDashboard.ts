export interface DashboardSidebarItem {
  label: string;
  icon: string;
  active?: boolean;
}

export interface DashboardMetric {
  label: string;
  value: string;
  delta: string;
  deltaClass: string;
}

export interface RecentActivityItem {
  title: string;
  description: string;
  time: string;
}

export interface RecentChannel {
  name: string;
  category: string;
  revenue: string;
  growth: string;
  confidence: string;
}

export const dashboardSidebar: DashboardSidebarItem[] = [
  { label: "Overview", icon: "grid", active: true },
  { label: "Revenue", icon: "cash" },
  { label: "Audiences", icon: "users" },
  { label: "Growth", icon: "trending-up" },
  { label: "Reports", icon: "document" },
  { label: "Settings", icon: "cog" },
];

export const dashboardMetrics: DashboardMetric[] = [
  { label: "Monthly Views", value: "1.2M", delta: "+8.7%", deltaClass: "text-indigo-600" },
  { label: "Subscribers", value: "198K", delta: "+5.2%", deltaClass: "text-emerald-600" },
  { label: "Estimated RPM", value: "$8.4", delta: "+3.4%", deltaClass: "text-sky-600" },
  { label: "Confidence Score", value: "92%", delta: "+1.8%", deltaClass: "text-violet-600" },
];

export const recentActivity: RecentActivityItem[] = [
  {
    title: "Channel analyzed",
    description: "Review Hub revenue projection completed.",
    time: "2m ago",
  },
  {
    title: "Revenue model updated",
    description: "New RPM insights added for Creative Minds.",
    time: "14m ago",
  },
  {
    title: "Audience profile refreshed",
    description: "North America audience data synced.",
    time: "1h ago",
  },
  {
    title: "New trend detected",
    description: "Lifestyle & Travel growth rate accelerated.",
    time: "3h ago",
  },
];

export const recentChannels: RecentChannel[] = [
  {
    name: "Creator Pulse",
    category: "Marketing",
    revenue: "$24.8K",
    growth: "+4.8%",
    confidence: "91%",
  },
  {
    name: "Studio Lab",
    category: "Education",
    revenue: "$18.2K",
    growth: "+7.1%",
    confidence: "89%",
  },
  {
    name: "Review Hub",
    category: "Tech",
    revenue: "$33.9K",
    growth: "+10.2%",
    confidence: "94%",
  },
  {
    name: "Daily Trends",
    category: "Lifestyle",
    revenue: "$12.4K",
    growth: "+5.6%",
    confidence: "87%",
  },
];

export const sidebarIconPaths: Record<string, string> = {
  grid: "M3 3h7v7H3V3zm11 0h7v7h-7V3zM3 14h7v7H3v-7zm11 0h7v7h-7v-7z",
  cash: "M4 7h16v10H4V7zm4 0a4 4 0 0 1-4 4m16 0a4 4 0 0 1-4-4M8 17a4 4 0 0 1-4-4m16 0a4 4 0 0 1-4 4m-4-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  users: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m14-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm6 10v-2a4 4 0 0 0-3-3.87m-2-12a4 4 0 0 1 0 7.75",
  "trending-up": "M3 17l6-6 4 4 8-8m0 0h-6m6 0v6",
  document: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm0 0v6h6M8 13h8M8 17h6",
  cog: "M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm0-13v3m0 13v3m9.19-14.19-2.12 2.12M4.93 19.07 2.81 21.19m18.38 0-2.12-2.12M4.93 4.93 2.81 2.81M22 12h-3M5 12H2",
};

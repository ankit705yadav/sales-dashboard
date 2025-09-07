import { create } from "zustand";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

// interfaces
interface Metric {
  label: string;
  value: string;
  change: string;
}

interface TopProduct {
  name: string;
  popularity: number;
  sales: number;
}

interface RevenueData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
  }[];
}

interface VisitorData {
  loyal: number[];
  new: number[];
  unique: number[];
}

interface SatisfactionData {
  lastMonthTotal: number;
  thisMonthTotal: number;
  lastMonthData: number[];
  thisMonthData: number[];
}

interface DashboardState {
  metrics: Metric[];
  revenueData: RevenueData;
  visitorData: VisitorData;
  satisfactionData: SatisfactionData;
  topProducts: TopProduct[];
  loading: boolean;
  error: string | null;
  fetchAllData: (getToken: () => Promise<string | null>) => Promise<void>;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  metrics: [],
  revenueData: { labels: [], datasets: [] },
  visitorData: { loyal: [], new: [], unique: [] },
  satisfactionData: {
    lastMonthTotal: 0,
    thisMonthTotal: 0,
    lastMonthData: [],
    thisMonthData: [],
  },
  topProducts: [],
  loading: true,
  error: null,

  fetchAllData: async (getToken) => {
    set({ loading: true, error: null });
    try {
      const token = await getToken();
      if (!token) {
        throw new Error("User is not authenticated.");
      }

      const apiClient = axios.create({
        baseURL: API_URL,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const [
        metricsRes,
        revenueRes,
        visitorsRes,
        satisfactionRes,
        productsRes,
      ] = await Promise.all([
        apiClient.get("/api/dashboard/metrics"),
        apiClient.get("/api/dashboard/revenue"),
        apiClient.get("/api/dashboard/visitor-insights"),
        apiClient.get("/api/dashboard/customer-satisfaction"),
        apiClient.get("/api/dashboard/top-products"),
      ]);

      set({
        metrics: metricsRes.data,
        revenueData: revenueRes.data,
        visitorData: visitorsRes.data,
        satisfactionData: satisfactionRes.data,
        topProducts: productsRes.data,
        loading: false,
      });
    } catch (error) {
      console.error("Failed to fetch dashboard data", error);
      set({ loading: false, error: "Failed to fetch data" });
    }
  },
}));

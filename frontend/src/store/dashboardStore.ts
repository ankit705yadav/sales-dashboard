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

interface DashboardState {
  metrics: Metric[];
  revenueData: any;
  visitorData: any;
  satisfactionData: any;
  topProducts: TopProduct[];
  loading: boolean;
  error: string | null;
  fetchAllData: () => Promise<void>;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  metrics: [],
  revenueData: {},
  visitorData: {},
  satisfactionData: {},
  topProducts: [],
  loading: true,
  error: null,

  fetchAllData: async () => {
    set({ loading: true, error: null });
    try {
      const [
        metricsRes,
        revenueRes,
        visitorsRes,
        satisfactionRes,
        productsRes,
      ] = await Promise.all([
        axios.get(`${API_URL}/api/dashboard/metrics`),
        axios.get(`${API_URL}/api/dashboard/revenue`),
        axios.get(`${API_URL}/api/dashboard/visitor-insights`),
        axios.get(`${API_URL}/api/dashboard/customer-satisfaction`),
        axios.get(`${API_URL}/api/dashboard/top-products`),
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

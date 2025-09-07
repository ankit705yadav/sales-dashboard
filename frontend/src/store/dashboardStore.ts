import { create } from "zustand";
import axios from "axios";
import { useAuth } from "@clerk/nextjs";

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
  // fetchAllData: () => Promise<void>;
  fetchAllData: (getToken: () => Promise<string | null>) => Promise<void>;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  metrics: [],
  revenueData: {},
  visitorData: {},
  satisfactionData: {},
  topProducts: [],
  loading: true,
  error: null,

  fetchAllData: async (getToken) => {
    set({ loading: true, error: null });
    try {
      const token = await getToken(); // Get the token from Clerk
      if (!token) {
        throw new Error("User is not authenticated.");
      }

      // Create an Axios instance with the auth header
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

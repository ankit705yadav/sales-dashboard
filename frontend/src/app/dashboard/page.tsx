"use client";

import { useEffect } from "react";
import { useDashboardStore } from "@/store/dashboardStore";
import MetricCard from "@/components/MetricCard";
import TotalRevenueChart from "@/components/charts/TotalRevenueChart";
import { Grid } from "@mui/material";

export default function DashboardPage() {
  const { metrics, revenue, fetchDashboardData } = useDashboardStore();

  useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);

  return (
    <Grid container spacing={3}>
      {metrics.map((metric) => (
        <Grid item xs={12} sm={6} md={3} key={metric.id}>
          <MetricCard
            title={metric.label}
            value={metric.value}
            change={metric.change}
          />
        </Grid>
      ))}
      <Grid item xs={12} md={8}>
        <TotalRevenueChart data={revenue} />
      </Grid>
      {/* ... Other components ... */}
    </Grid>
  );
}

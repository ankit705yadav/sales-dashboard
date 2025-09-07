"use client";

import { useEffect } from "react";
import { useDashboardStore } from "@/store/dashboardStore";
import { useAuth } from "@clerk/nextjs";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";

// components
import MetricCard from "@/components/MetricCard";
import TotalRevenueChart from "@/components/charts/TotalRevenueChart";

// icons
import ShowChartIcon from "@mui/icons-material/ShowChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PeopleIcon from "@mui/icons-material/People";

// Styles for each metric card
const cardStyles = [
  { icon: <ShowChartIcon />, color: "#FFE2E5", iconColor: "#FA5A7D" },
  { icon: <DescriptionIcon />, color: "#FFF4DE", iconColor: "#FF947A" },
  { icon: <LocalOfferIcon />, color: "#DCFCE7", iconColor: "#3CD856" },
  { icon: <PeopleIcon />, color: "#F3E8FF", iconColor: "#BF83FF" },
];

export default function DashboardPage() {
  const { getToken } = useAuth();
  const { metrics, revenueData, fetchAllData } = useDashboardStore();

  useEffect(() => {
    fetchAllData(getToken);
  }, [fetchAllData, getToken]);

  return (
    <Box>
      <Grid container spacing={3}>
        {metrics.map((metric, index) => (
          <Grid key={index}>
            <MetricCard
              title={metric.label}
              value={metric.value}
              change={metric.change}
              icon={cardStyles[index]?.icon}
              color={cardStyles[index]?.color}
              iconColor={cardStyles[index]?.iconColor}
            />
          </Grid>
        ))}
        <Grid>
          <TotalRevenueChart data={revenueData} />
        </Grid>
      </Grid>
    </Box>
  );
}

"use client";
import { useEffect } from "react";
import { useDashboardStore } from "@/store/dashboardStore";
import {
  Box,
  Grid,
  CircularProgress,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

// Import Components
import MetricCard from "@/components/MetricCard";
import TotalRevenueChart from "@/components/charts/TotalRevenueChart";
import VisitorInsightsChart from "@/components/charts/VisitorInsightsChart";
import TopProductsTable from "@/components/TopProductsTable";
import CustomerSatisfactionChart from "@/components/charts/CustomerSatisfactionChart";
import TargetVsRealityChart from "@/components/charts/TargetVsRealityChart";
import SalesMapping from "@/components/SalesMapping";
import VolumeServiceLevelChart from "@/components/charts/VolumeServiceLevelChart";

import Button from "@mui/material/Button";
import FileUploadIcon from "@mui/icons-material/FileUpload";

import ShowChartIcon from "@mui/icons-material/ShowChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PeopleIcon from "@mui/icons-material/People";

export default function DashboardPage() {
  const cardStyles = [
    { icon: <ShowChartIcon />, color: "#FFE2E5", iconColor: "#FA5A7D" },
    { icon: <DescriptionIcon />, color: "#FFF4DE", iconColor: "#FF947A" },
    { icon: <LocalOfferIcon />, color: "#DCFCE7", iconColor: "#3CD856" },
    { icon: <PeopleIcon />, color: "#F3E8FF", iconColor: "#BF83FF" },
  ];

  const {
    metrics,
    revenueData,
    visitorData,
    satisfactionData,
    topProducts,
    loading,
    error,
    fetchAllData,
  } = useDashboardStore();

  useEffect(() => {
    fetchAllData();
  }, [fetchAllData]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Grid container spacing={3}>
        {/* Today's Sales - Metrics */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  mb: 2,
                }}
              >
                <Box>
                  <Typography variant="h6">Today's Sales</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Sales Summery
                  </Typography>
                </Box>
                <Button
                  variant="outlined"
                  startIcon={<FileUploadIcon />}
                  sx={{
                    textTransform: "none",
                    color: "text.secondary",
                    borderColor: "#E2E8F0",
                  }}
                >
                  Export
                </Button>
              </Box>
              <Grid container spacing={3}>
                {metrics.map((metric, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <MetricCard
                      title={metric.label}
                      value={metric.value}
                      change={metric.change}
                      icon={cardStyles[index].icon}
                      color={cardStyles[index].color}
                      iconColor={cardStyles[index].iconColor}
                    />
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Visitor Insights */}
        <Grid item xs={12}>
          <VisitorInsightsChart data={visitorData} />
        </Grid>

        {/* Total Revenue & Customer Satisfaction & Target vs Reality */}
        <Grid item xs={12} lg={7}>
          <TotalRevenueChart data={revenueData} />
        </Grid>

        {/*Customer satisfaction data*/}
        <Grid item xs={12} lg={5}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <CustomerSatisfactionChart data={satisfactionData} />
            </Grid>
            <Grid item xs={12}>
              <TargetVsRealityChart />
            </Grid>
          </Grid>
        </Grid>

        {/* Top Products */}
        <Grid item xs={12}>
          <TopProductsTable products={topProducts} />
        </Grid>

        {/* Sales Mapping & Volume vs Service Level */}
        <Grid item xs={12} md={6}>
          <SalesMapping />
        </Grid>
        <Grid item xs={12} md={6}>
          <VolumeServiceLevelChart />
        </Grid>
      </Grid>
    </Box>
  );
}

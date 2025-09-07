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

import { useAuth } from "@clerk/nextjs";

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
import UploadIcon from "@mui/icons-material/Upload";

// import ShowChartIcon from "@mui/icons-material/ShowChart";
import ShowChartIcon from "@mui/icons-material/ShowChart";
// import DescriptionIcon from "@mui/icons-material/Description";
import DescriptionIcon from "@mui/icons-material/Description";
// import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
// import PeopleAltIcon from "@mui/icons-material/People";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

export default function DashboardPage() {
  const { getToken } = useAuth(); // Get the getToken function from the hook

  const cardStyles = [
    { icon: <ShowChartIcon />, color: "#FFE2E5", iconColor: "#FA5A7D" },
    { icon: <DescriptionIcon />, color: "#FFF4DE", iconColor: "#FF947A" },
    { icon: <LocalOfferIcon />, color: "#DCFCE7", iconColor: "#3CD856" },
    { icon: <PeopleAltIcon />, color: "#F3E8FF", iconColor: "#BF83FF" },
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
    // Pass getToken to the fetchAllData action
    fetchAllData(getToken);
  }, [fetchAllData, getToken]);

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
        <Grid>
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
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    Today&apos;s Sales
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Sales Summery
                  </Typography>
                </Box>
                <Button
                  variant="outlined"
                  startIcon={<UploadIcon />}
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
                  <Grid key={index}>
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
        <Grid>
          <VisitorInsightsChart data={visitorData} />
        </Grid>

        {/* Total Revenue & Customer Satisfaction & Target vs Reality */}
        <Grid>
          <TotalRevenueChart data={revenueData} />
        </Grid>

        {/*Customer satisfaction data*/}
        <Grid>
          <Grid container spacing={3}>
            <Grid>
              <CustomerSatisfactionChart data={satisfactionData} />
            </Grid>
            <Grid>
              <TargetVsRealityChart />
            </Grid>
          </Grid>
        </Grid>

        {/* Top Products */}
        <Grid>
          <TopProductsTable products={topProducts} />
        </Grid>

        {/* Sales Mapping & Volume vs Service Level */}
        <Grid>
          <SalesMapping />
        </Grid>
        <Grid>
          <VolumeServiceLevelChart />
        </Grid>
      </Grid>
    </Box>
  );
}

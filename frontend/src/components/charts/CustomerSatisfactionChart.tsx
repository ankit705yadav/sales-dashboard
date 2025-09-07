"use client";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

const CustomerSatisfactionChart = ({ data }: { data: Record<string, any> }) => {
  const chartData = data?.lastMonthData?.map(
    (_value: number, index: number) => ({
      name: `Day ${index + 1}`,
      "Last Month": data.lastMonthData[index],
      "This Month": data.thisMonthData[index],
    }),
  );

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Customer Satisfaction</Typography>
        <Box sx={{ height: 160, width: 400, mt: 3 }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              {/* Gradients for the area fill */}
              <defs>
                <linearGradient id="colorThisMonth" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3CD856" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#3CD856" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorLastMonth" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0088FE" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#0088FE" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" hide />
              <YAxis hide domain={["dataMin - 50", "dataMax + 50"]} />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="This Month"
                stroke="#3CD856"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorThisMonth)"
              />
              <Area
                type="monotone"
                dataKey="Last Month"
                stroke="#0088FE"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorLastMonth)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Box>

        {/* Custom Legend at the bottom */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            mt: 2,
            textAlign: "center",
          }}
        >
          <Box>
            <Typography variant="body2" color="text.secondary">
              <Box
                component="span"
                sx={{
                  display: "inline-block",
                  width: 15,
                  height: 2,
                  bgcolor: "#0088FE",
                  mr: 1,
                  verticalAlign: "middle",
                }}
              />
              Last Month
            </Typography>
            <Typography variant="h6">
              ${data?.lastMonthTotal?.toLocaleString()}
            </Typography>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box>
            <Typography variant="body2" color="text.secondary">
              <Box
                component="span"
                sx={{
                  display: "inline-block",
                  width: 15,
                  height: 2,
                  bgcolor: "#3CD856",
                  mr: 1,
                  verticalAlign: "middle",
                }}
              />
              This Month
            </Typography>
            <Typography variant="h6">
              ${data?.thisMonthTotal?.toLocaleString()}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CustomerSatisfactionChart;

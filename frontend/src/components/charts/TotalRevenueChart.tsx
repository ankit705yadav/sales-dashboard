"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const legendItems = [
  { name: "Online Sales", color: "#0088FE" },
  { name: "Offline Sales", color: "#00C49F" },
];

// Function to format the Y-axis ticks (e.g., 10000 -> 10k)
const yAxisTickFormatter = (value: number) => {
  if (value === 0) return "0";
  return `${value / 1000}k`;
};

const TotalRevenueChart = ({ data }: { data: any }) => {
  // Format data for Recharts
  const chartData = data?.labels?.map((label: string, index: number) => ({
    name: label,
    "Online Sales": data.datasets[0].data[index],
    "Offline Sales": data.datasets[1].data[index],
  }));

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Total Revenue</Typography>
        <Box sx={{ width: 600, height: 200, mt: 2 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} barGap={8}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="name"
                axisLine={false} // Hide axis line
                tickLine={false} // Hide tick lines
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tickFormatter={yAxisTickFormatter} // Use the custom formatter
              />
              <Tooltip
                formatter={(value: number) => `$${value.toLocaleString()}`}
              />
              <Bar
                dataKey="Online Sales"
                fill="#0088FE"
                radius={[4, 4, 0, 0]}
                barSize={12} // Set a fixed bar size for thickness
              />
              <Bar
                dataKey="Offline Sales"
                fill="#00C49F"
                radius={[4, 4, 0, 0]}
                barSize={12}
              />
            </BarChart>
          </ResponsiveContainer>
        </Box>

        {/* Custom Legend */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mt: 2 }}>
          {legendItems.map((item) => (
            <Box key={item.name} sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  bgcolor: item.color,
                  mr: 1,
                }}
              />
              <Typography variant="body2">{item.name}</Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default TotalRevenueChart;

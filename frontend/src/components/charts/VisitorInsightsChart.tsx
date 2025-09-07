"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SquareIcon from "@mui/icons-material/Square";

// interface
interface VisitorData {
  loyal: number[];
  new: number[];
  unique: number[];
}

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const legendItems = [
  { name: "Loyal Customers", color: "#8884d8" },
  { name: "New Customers", color: "#FA5A7D" },
  { name: "Unique Customers", color: "#3CD856" },
];

const VisitorInsightsChart = ({ data }: { data: VisitorData }) => {
  const chartData = months.map((month, index) => ({
    name: month,
    "Loyal Customers": data?.loyal?.[index],
    "New Customers": data?.new?.[index],
    "Unique Customers": data?.unique?.[index],
  }));

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Visitor Insights</Typography>
        <Box sx={{ height: 180, width: 600, mt: 2 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="name"
                axisLine={false} // Hide the axis line
                tickLine={false} // Hide the tick lines
              />
              <YAxis
                domain={[0, 400]} // Set the Y-axis domain
                ticks={[0, 100, 200, 300, 400]} // Set specific ticks
                axisLine={false}
                tickLine={false}
              />
              <Tooltip />

              {/* Add the reference line for July */}
              <ReferenceLine x="Jul" stroke="red" strokeDasharray="3 3" />

              <Line
                type="monotone"
                dataKey="Loyal Customers"
                stroke="#8884d8"
                strokeWidth={3}
                dot={false} // Hide dots on the line
                activeDot={{ r: 8 }} // Style for the dot on hover
              />
              <Line
                type="monotone"
                dataKey="New Customers"
                stroke="#FA5A7D"
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="Unique Customers"
                stroke="#3CD856"
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>

        {/* Custom Legend */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mt: 2 }}>
          {legendItems.map((item) => (
            <Box key={item.name} sx={{ display: "flex", alignItems: "center" }}>
              <SquareIcon sx={{ color: item.color, fontSize: 14, mr: 0.5 }} />
              <Typography variant="body2">{item.name}</Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default VisitorInsightsChart;

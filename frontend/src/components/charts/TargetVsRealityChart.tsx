"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SquareIcon from "@mui/icons-material/Square";

const data = [
  // Dummy data for Target vs Reality
  { name: "Jan", "Reality Sales": 8.823, "Target Sales": 12.122 },
  { name: "Feb", "Reality Sales": 7.5, "Target Sales": 11.5 },
  { name: "Mar", "Reality Sales": 9.2, "Target Sales": 13.0 },
  { name: "Apr", "Reality Sales": 8.0, "Target Sales": 10.5 },
  { name: "May", "Reality Sales": 10.0, "Target Sales": 14.0 },
  { name: "Jun", "Reality Sales": 9.5, "Target Sales": 12.8 },
  { name: "Jul", "Reality Sales": 11.0, "Target Sales": 15.0 },
];

const TargetVsRealityChart = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Target vs Reality</Typography>
        <Box sx={{ height: 200, mt: 2 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} barGap={4}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis hide />
              <Tooltip />
              <Bar
                dataKey="Reality Sales"
                fill="#5541D7"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="Target Sales"
                fill="#A8DADC"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-around", mt: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <SquareIcon sx={{ color: "#5541D7", fontSize: 14 }} />
            <Typography variant="body2" ml={0.5}>
              Reality Sales
            </Typography>
            <Typography variant="body2" ml={1} fontWeight="bold">
              8.823
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <SquareIcon sx={{ color: "#A8DADC", fontSize: 14 }} />
            <Typography variant="body2" ml={0.5}>
              Target Sales
            </Typography>
            <Typography variant="body2" ml={1} fontWeight="bold">
              12.122
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TargetVsRealityChart;

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
import Divider from "@mui/material/Divider";

const originalData = [
  { name: "1", Volume: 1135, Services: 635 },
  { name: "2", Volume: 1200, Services: 700 },
  { name: "3", Volume: 1100, Services: 600 },
  { name: "4", Volume: 1300, Services: 750 },
  { name: "5", Volume: 1250, Services: 680 },
  { name: "6", Volume: 1400, Services: 800 },
  { name: "7", Volume: 1150, Services: 650 },
];

const chartData = originalData.map((item) => ({
  ...item,
  "Remaining Volume": item.Volume - item.Services,
}));

const VolumeServiceLevelChart = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Volume vs Service Level</Typography>
        <Box sx={{ width: 300, height: 195, mt: 2 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              barGap={4}
              margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" hide />
              <YAxis hide />
              <Tooltip
                formatter={(value: number, name: string, props) => {
                  if (name === "Services") return [value, "Services"];
                  return [props.payload.Volume, "Volume"];
                }}
              />
              <Bar
                dataKey="Services"
                stackId="a"
                fill="#00C49F"
                radius={[0, 0, 4, 4]}
                barSize={12}
              />
              <Bar
                dataKey="Remaining Volume"
                stackId="a"
                fill="#0088FE"
                radius={[4, 4, 0, 0]}
                barSize={12}
              />
            </BarChart>
          </ResponsiveContainer>
        </Box>

        {/* Custom Legend */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            mt: 2,
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="body2" color="text.secondary">
              <Box
                component="span"
                sx={{
                  display: "inline-block",
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  bgcolor: "#0088FE",
                  mr: 1,
                  verticalAlign: "middle",
                }}
              />
              Volume
            </Typography>
            <Typography variant="h6">1,135</Typography>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="body2" color="text.secondary">
              <Box
                component="span"
                sx={{
                  display: "inline-block",
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  bgcolor: "#00C49F",
                  mr: 1,
                  verticalAlign: "middle",
                }}
              />
              Services
            </Typography>
            <Typography variant="h6">635</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default VolumeServiceLevelChart;

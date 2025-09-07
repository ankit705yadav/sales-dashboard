import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  color: string;
  iconColor: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  icon,
  color,
  iconColor,
}) => {
  return (
    <Card sx={{ backgroundColor: color, borderRadius: 3 }}>
      <CardContent>
        <Avatar sx={{ bgcolor: iconColor, mb: 2 }}>{icon}</Avatar>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="h5" sx={{ mt: 0.5, fontWeight: "bold" }}>
          {value}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            color: "text.secondary",
            mt: 1,
          }}
        >
          <Typography variant="body2" sx={{ color: "success.main", mr: 0.5 }}>
            {change}
          </Typography>
          <Typography variant="body2">from yesterday</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MetricCard;

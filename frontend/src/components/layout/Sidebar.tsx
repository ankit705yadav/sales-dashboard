"use client";
import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";

// Import icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InventoryIcon from "@mui/icons-material/Inventory";
import AssessmentIcon from "@mui/icons-material/Assessment";
import MessageIcon from "@mui/icons-material/Message";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import CodeIcon from "@mui/icons-material/Code";

const menuItems = [
  { text: "Dashboard", icon: <DashboardIcon /> },
  { text: "Leaderboard", icon: <LeaderboardIcon /> },
  { text: "Order", icon: <ShoppingCartIcon /> },
  { text: "Products", icon: <InventoryIcon /> },
  { text: "Sales Report", icon: <AssessmentIcon /> },
  { text: "Messages", icon: <MessageIcon /> },
  { text: "Settings", icon: <SettingsIcon /> },
  { text: "Sign Out", icon: <LogoutIcon /> },
];

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 280,
        height: "100vh",
        bgcolor: "white",
        // borderRight: "1px solid #E2E8F0",
        display: "flex",
        flexDirection: "column",
        p: 2,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src="/dabangLogo.png"
          alt="Dabang Logo"
          width={50}
          height={50}
          priority // Add this if the logo is above the fold
        />
        <Typography variant="h5" sx={{ p: 2 }}>
          Dabang
        </Typography>
      </div>
      <List sx={{ flexGrow: 1 }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              sx={{
                borderRadius: 2,
                bgcolor:
                  item.text === "Dashboard" ? "primary.main" : "transparent",
                color: item.text === "Dashboard" ? "white" : "text.secondary",
                "&:hover": {
                  bgcolor:
                    item.text === "Dashboard" ? "primary.dark" : "action.hover",
                },
                my: 0.5,
              }}
            >
              <ListItemIcon sx={{ color: "inherit" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box
        sx={{
          p: 2,
          mt: "auto",
          bgcolor: "#5D5FEF",
          borderRadius: 3,
          textAlign: "center",
        }}
      >
        <CodeIcon
          sx={{
            fontSize: 40,
            color: "#5D5FEF",
            border: "2px solid white",
            borderRadius: 2,
            backgroundColor: "white",
          }}
        />
        {/*import CodeIcon from '@mui/icons-material/Code';*/}
        <Typography variant="h6" color="white" fontSize={20}>
          Dabang Pro
        </Typography>
        <Typography variant="body2" sx={{ my: 1 }} fontSize={12} color="white">
          Get access to all features on tetumbas
        </Typography>
        <Button variant="contained" color="inherit" colour="blue">
          Get Pro
        </Button>
      </Box>
    </Box>
  );
};

export default Sidebar;

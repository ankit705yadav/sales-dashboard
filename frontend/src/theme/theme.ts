"use client";
import { createTheme } from "@mui/material/styles";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#5541D7", // purple
    },
    background: {
      default: "#F4F7FE", // Light background color
      paper: "#FFFFFF",
    },
    text: {
      primary: "#171A1F",
      secondary: "#565E6C",
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    h5: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 600,
    },
    subtitle1: {
      color: "#565E6C",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
          border: "1px solid #E2E8F0",
        },
      },
    },
  },
});

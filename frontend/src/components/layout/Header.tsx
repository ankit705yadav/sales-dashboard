"use client";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
  useUser,
} from "@clerk/nextjs";
import Button from "@mui/material/Button";
import USFlagIcon from "../icons/USFlagIcon";
import Image from "next/image";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Header = () => {
  const { user } = useUser(); // Get the user object from Clerk

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#FFFFFF",
        // borderRadius: 2,
        p: 2,
        mb: 3,
        // boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        Dashboard
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
        {/* Search Bar - Widened */}
        <TextField
          variant="outlined"
          placeholder="Search here..."
          size="small"
          sx={{
            width: 450,
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
              backgroundColor: "#F4F7FE",
              "& fieldset": { border: "none" },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="primary" />
              </InputAdornment>
            ),
          }}
        />

        {/* Language Selector - with Flag */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            color: "text.secondary",
          }}
        >
          <USFlagIcon sx={{ fontSize: 24, borderRadius: "50%" }} />{" "}
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            Eng (US)
          </Typography>
          <KeyboardArrowDownIcon />
        </Box>

        <Image
          src="/Notifications.png"
          alt="Dabang Logo"
          width={40}
          height={40}
          priority
        />

        {/* Clerk User Button and Info */}
        <SignedIn>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <UserButton afterSignOutUrl="/" />
            {user && ( // Check if user object is loaded
              <Box sx={{ textAlign: "left" }}>
                <Typography variant="body1" sx={{ fontWeight: "medium" }}>
                  {user.fullName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {(user.publicMetadata?.role as string) || "User"}
                </Typography>
              </Box>
            )}
          </Box>
          <KeyboardArrowDownIcon />
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
            <Button variant="contained">Sign In</Button>
          </SignInButton>
        </SignedOut>
      </Box>
    </Box>
  );
};

export default Header;

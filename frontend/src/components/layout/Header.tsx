import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mb: 3,
      }}
    >
      <Typography variant="h5">Dashboard</Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: "white",
            p: "2px 4px",
            borderRadius: 2,
          }}
        >
          <IconButton sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search here..." />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <LanguageIcon />
          <Typography>Eng (US)</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Avatar alt="Musfiq" src="/static/images/avatar/1.jpg" />
          <Box>
            <Typography variant="body1" sx={{ fontWeight: "medium" }}>
              Musfiq
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Admin
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;

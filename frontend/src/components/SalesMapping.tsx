import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const SalesMapping = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Sales Mapping by Country
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 200,
            bgcolor: "#F0F4F8",
            borderRadius: 2,
          }}
        >
          <img
            src="https://via.placeholder.com/250x180/E0E0E0/5541D7?text=Map+Placeholder"
            alt="World Map"
            style={{ maxWidth: "100%", height: "auto", borderRadius: "4px" }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default SalesMapping;

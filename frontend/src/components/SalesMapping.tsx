import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";

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
            bgcolor: "#F0F4F8",
            borderRadius: 2,
            height: 270,
          }}
        >
          <Image
            src="/world.png"
            alt="worldMap Logo"
            // width={40}
            // height={40}
            // priority
            width={400}
            height={100}
            style={{ maxWidth: "100%", height: "100%", borderRadius: "4px" }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default SalesMapping;

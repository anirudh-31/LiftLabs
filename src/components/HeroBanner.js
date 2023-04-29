import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import "../styles/HeroBanner.css";
function HeroBanner() {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <h1>Sweat, Smile and Repeat!</h1>
      <p className="subtitle">Check out the most effective exercises</p>
    </Box>
  );
}

export default HeroBanner;

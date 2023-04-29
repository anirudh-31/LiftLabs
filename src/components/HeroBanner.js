import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import "../styles/HeroBanner.css";
import Hero from "../assets/hero.png";
function HeroBanner() {
  return (
    <Box
      sx={{ mt: { lg: "50px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
      display="flex"
      alignItems="center"
      overflow="hidden"
    >
      <div>
        <h1>Sweat, Smile and Repeat!</h1>
        <p className="subtitle">Check out the most effective exercises</p>
        <Button variant="contained" color="error" href="#exercises">
          Explore Exercises
        </Button>
      </div>
      <img src={Hero} alt="" style={{ marginLeft: "-35px" }} />
    </Box>
  );
}

export default HeroBanner;

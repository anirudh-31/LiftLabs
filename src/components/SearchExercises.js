import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { exerciseOptions, fetchExerciseData } from "../utils/fetchExerciseData";
import HorizontalScrollBar from "./HorizontalScrollBar";

function SearchExercises() {
  const [searchEx, setSerchEx] = useState("");
  const [exercises, setExercises] = useState([]);
  const [bodyPartData, setBodyPartData] = useState([]);
  useEffect(() => {
    const fetchExData = async () => {
      const bodyPartData = await fetchExerciseData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyPartData(["all", ...bodyPartData]);
    };
  }, []);
  const handleSearch = async () => {
    if (searchEx) {
      const data = await fetchExerciseData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      const fetchedExercises = data.filter(
        (ex) =>
          ex.name.toLowerCase().includes(searchEx) ||
          ex.target.toLowerCase().includes(searchEx) ||
          ex.equipment.toLowerCase().includes(searchEx) ||
          ex.bodyPart.toLowerCase().includes(searchEx)
      );
      setSerchEx("");
      setExercises(fetchedExercises);
    }
  };
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome exercises you <br /> should know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "5px" },
            width: { lg: "1170px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={searchEx}
          onChange={(ele) => {
            setSerchEx(ele.target.value.toLowerCase());
          }}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="searchExBtn"
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={() => handleSearch()}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollBar data={bodyPartData} />
      </Box>
    </Stack>
  );
}

export default SearchExercises;

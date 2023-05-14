export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": "024f5af5fdmsh07c8e0ac8d4eb75p1c7fa7jsn7a75892b9144 ",
  },
};

export const fetchExerciseData = async (url, options) => {
  console.log(process.env.RAPID_API_KEY);
  const data = await fetch(url, options);
  const response = await data.json();
  return response;
};

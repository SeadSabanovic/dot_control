import { createSlice } from "@reduxjs/toolkit";
import poster from "../../assets/images/cinema.webp";

const initialState = {
  selectedMovie: {
    title: "Superhero Movies",
    poster,
    description: "Find Your Flick: Your Personal Cinema Journey Awaits!",
    imdbID: undefined,
  },
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    selectMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
  },
});

export const { selectMovie } = movieSlice.actions;
export default movieSlice.reducer;

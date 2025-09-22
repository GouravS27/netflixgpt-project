import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo:null
  },
  reducers: {
    addNowPlayingMovies: (state, actions) => {
      state.nowPlayingMovies = actions.payload;
    },
    addTrailerMovies:(state,action)=>{
      state.trailerVideo=action.payload
    }
  },
});

export const { addNowPlayingMovies , addTrailerMovies } = movieSlice.actions;
export default movieSlice.reducer;

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
    addPopularMovies: (state, actions) => {
      state.popularMovies = actions.payload;
    },
    addTrendingMovies: (state, actions) => {
      state.trendingMovies = actions.payload;
    },
    addUpcomingMovies: (state, actions) => {
      state.upcomingMovies = actions.payload;
    },
    addOnlyNetflixMovies: (state, actions) => {
      state.onlyNetflix = actions.payload;
    },
    addTrailerMovies:(state,action)=>{
      state.trailerVideo=action.payload
    }
  },
});

export const { addNowPlayingMovies,addPopularMovies , addTrailerMovies ,addTrendingMovies,addUpcomingMovies,addOnlyNetflixMovies} = movieSlice.actions;
export default movieSlice.reducer;

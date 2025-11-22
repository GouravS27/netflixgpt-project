import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        showGptSearch: false,
        moviesName:null,
        moviesSearchResult:null
    },
    reducers:{
        toggleSearchView:(state)=>{
            state.showGptSearch = !state.showGptSearch;
        },
        addGPTMovieResults:(state,actions)=>{
            const {moviesName , moviesSearchResult} = actions.payload;
            state.moviesName = moviesName;
            state.moviesSearchResult = moviesSearchResult;
        }

    }
});

export const { toggleSearchView , addGPTMovieResults} = gptSlice.actions;
export default gptSlice.reducer
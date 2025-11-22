import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrendingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

export const useTrendingMovies = () => {
    
  //Fetch Data from TMDB API and updating in store
  const dispatch = useDispatch();

  // memoizing -- unncessary API Calls
  const trendingMovies = useSelector((store) => store.movies.trendingMovies);


  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=2",
      API_OPTIONS
    );
    const json = await data.json();

    //Storing in MovieSlice
    dispatch(addTrendingMovies(json.results));
  };
  useEffect(() => {
    if(!trendingMovies)getTrendingMovies();
  }, []);
};

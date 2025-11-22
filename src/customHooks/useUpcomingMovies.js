import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

export const useUpcomingMovies = () => {
    
  //Fetch Data from TMDB API and updating in store
  const dispatch = useDispatch();

  
  // memoizing -- unncessary API Calls
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=3",
      API_OPTIONS
    );
    const json = await data.json();

    //Storing in MovieSlice
    dispatch(addUpcomingMovies(json.results));
  };
  useEffect(() => {
    if(!upcomingMovies)getUpcomingMovies();
  }, []);
};

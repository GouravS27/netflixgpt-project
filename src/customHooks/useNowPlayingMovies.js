import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

export const useNowPlayingMovies = () => {
  //Fetch Data from TMDB API and updating in store
  const dispatch = useDispatch();

  // memoizing -- unncessary API Calls
  const nowPlayingMovies = useSelector(
    (store) => store.movies.addNowPlayingMovies
  );

  const getNowPlayingMoviesTMDB = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=2",
      API_OPTIONS
    );
    const json = await data.json();

    //Storing in MovieSlice
    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    if (!nowPlayingMovies) getNowPlayingMoviesTMDB();
  }, []);
};

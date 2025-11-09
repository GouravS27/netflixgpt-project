import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addOnlyNetflixMovies } from "../utils/movieSlice";
import { useEffect } from "react";

export const useOnlyNetflix = () => {
    
  //Fetch Data from TMDB API and updating in store
  const dispatch = useDispatch();

  const getOnlyNetflixMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=2",
      API_OPTIONS
    );
    const json = await data.json();

    //Storing in MovieSlice
    dispatch(addOnlyNetflixMovies(json.results));
  };
  useEffect(() => {
    getOnlyNetflixMovies();
  }, []);
};

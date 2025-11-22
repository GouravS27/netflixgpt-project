import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerMovies } from "../utils/movieSlice";
import { useEffect } from "react";

export const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();

  // memoizing -- unncessary API Calls
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);

    const filterTrailer = json.results.filter(
      (video) => video.type === "Trailer"
    );

    //If No Trailer then take the first video object
    const trailer = filterTrailer.length ? filterTrailer[0] : json.results[0];
    // console.log(trailer);
    dispatch(addTrailerMovies(trailer));
  };
  useEffect(() => {
    if(!trailerVideo)getMovieVideos();
  }, []);
};

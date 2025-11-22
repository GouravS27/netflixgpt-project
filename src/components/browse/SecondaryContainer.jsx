import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movieList = useSelector((store) => store.movies);

  return (
    <div className=" -mt-75 relative z-20 ">
      <MovieList title={"Now Playing"} movies={movieList.nowPlayingMovies} />
      <MovieList title={"Trending"} movies={movieList.trendingMovies} />
      <MovieList title={"Only on Netflix"} movies={movieList.onlyNetflix} />
      <MovieList title={"Popular"} movies={movieList.popularMovies} />
      <MovieList title={"Upcoming Movies"} movies={movieList.upcomingMovies} />
    </div>
  );
};

export default SecondaryContainer;

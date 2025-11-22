import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies);

  return (
    <div className="p-5 ">
      <div>
        <h1 className="text-3xl pb-4 text-white font-semibold">{title}</h1>
      </div>
      <div className="flex overflow-x-scroll rounded-md">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

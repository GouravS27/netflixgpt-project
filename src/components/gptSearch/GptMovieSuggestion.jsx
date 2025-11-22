import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../Browse/MovieList";

const GptMovieSuggestion = () => {
  const gpt = useSelector((store) => store.gpt);
  const { moviesName, moviesSearchResult } = gpt;
  if (!moviesName) return null;

  return (
    <div className="p-4 mt-8 m-4 bg-black/60 rounded-2xl">
      {moviesName.map((movie,index) => (
        <MovieList key={movie} title={movie} movies={moviesSearchResult[index]} />
      ))}
    </div>
  );
};

export default GptMovieSuggestion;

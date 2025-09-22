import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movieList = useSelector(store=>store.movies)

  return (
    <div>
      <MovieList title={"now playing"} movies ={movieList.nowPlayingMovies} />
    </div>
  )
}

export default SecondaryContainer
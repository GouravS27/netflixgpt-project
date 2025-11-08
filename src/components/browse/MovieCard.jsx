import React from 'react'
import { IMG_CDN } from '../../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 mr-3'>
      <img className='rounded-md cursor-pointer' src={IMG_CDN + posterPath} alt="" />
    </div>
  )
}

export default MovieCard
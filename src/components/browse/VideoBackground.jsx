import React, { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants";

const VideoBackground = ({ movieId }) => {
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/1038392/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);

    const filterTrailer = json.results.filter(
      (video) => video.type === "Trailer"
    );

    //If No Trailer then take the first video object
    const trailer = filterTrailer.length ? filterTrailer[0] : json.results[0];
    console.log(trailer);
  };
  useEffect(() => {
    getMovieVideos();
  }, []);

  return (
    <div>
      <iframe
        src={"https://www.youtube.com/embed/"+ trailer.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;

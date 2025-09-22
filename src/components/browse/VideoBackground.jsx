import { useSelector } from "react-redux";
import { useTrailerVideo } from "../../customHooks/useTrailerVideo";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useTrailerVideo(movieId);

  return (
    <div className="w-full overflow-x-hidden">
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1`}
        title="Trailer"
        allow="autoplay; encrypted-media; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default VideoBackground;

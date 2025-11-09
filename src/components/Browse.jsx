import { useNowPlayingMovies } from "../customHooks/useNowPlayingMovies";
import { useOnlyNetflix } from "../customHooks/useOnlyNetflix";
import { usePopularMovies } from "../customHooks/usePopularMovies";
import { useTrendingMovies } from "../customHooks/useTrendingMovies";
import { useUpcomingMovies } from "../customHooks/useUpcomingMovies";
import MainContainer from "./browse/MainContainer";
import SecondaryContainer from "./browse/SecondaryContainer";
import Header from "./Header";

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();
  useOnlyNetflix();

  return (
    <div className="bg-black">
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;

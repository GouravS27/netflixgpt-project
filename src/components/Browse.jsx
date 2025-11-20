import { useSelector } from "react-redux";
import { useNowPlayingMovies } from "../customHooks/useNowPlayingMovies";
import { useOnlyNetflix } from "../customHooks/useOnlyNetflix";
import { usePopularMovies } from "../customHooks/usePopularMovies";
import { useTrendingMovies } from "../customHooks/useTrendingMovies";
import { useUpcomingMovies } from "../customHooks/useUpcomingMovies";
import MainContainer from "./browse/MainContainer";
import SecondaryContainer from "./browse/SecondaryContainer";
import Footer from "./Footer";
import GPTSearch from "./GPTSearch";
import Header from "./Header";

const Browse = () => {
  const showGPTSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();
  useOnlyNetflix();

  return (
    <div className="bg-black">
      <Header />

      {showGPTSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Browse;

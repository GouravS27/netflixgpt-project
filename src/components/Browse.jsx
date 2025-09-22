import { useNowPlayingMovies } from "../customHooks/useNowPlayingMovies";
import MainContainer from "./browse/MainContainer";
import SecondaryContainer from "./browse/SecondaryContainer";
import Header from "./Header";

const Browse = () => {

  useNowPlayingMovies()

  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;

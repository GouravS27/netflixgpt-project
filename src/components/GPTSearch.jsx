import GptSearchBar from "./gptSearch/GptSearchBar";
import GptMovieSuggestion from "./gptSearch/GptMovieSuggestion";
import { BG_IMG } from "../utils/constants";
import Footer from "../components/Footer";

const GPTSearch = () => {
  return (
    <div>
      <img className="fixed -z-10" src={BG_IMG} alt="" />
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GPTSearch;

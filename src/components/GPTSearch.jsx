import GptSearchBar from "./gptSearch/GptSearchBar";
import GptMovieSuggestion from "./gptSearch/GptMovieSuggestion";
import { BG_IMG } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div>
      <img
        className="absolute -z-10"
        src={BG_IMG}
        alt=""
      />
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GPTSearch;

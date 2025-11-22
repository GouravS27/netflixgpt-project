import { useRef } from "react";
import { API_OPTIONS, GEMINI_API_KEY } from "../../utils/constants";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { addGPTMovieResults } from "../../utils/gptSlice";
import { useDispatch } from "react-redux";

const GptSearchBar = () => {
  const searchRef = useRef(null);
  const dispatch = useDispatch();

  // for each movies - TMDB Search
  const searchMoviesTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    return json.results;
  };

  const ai = new GoogleGenerativeAI(GEMINI_API_KEY);

  const handleGPTSearchClick = async () => {
    const userQuery = searchRef.current.value;

    const prompt =
      "Act as a Movie Recommendation system and suggest some movies for the query: " +
      userQuery +
      ". Only give me exactly 5 movie names, comma separated.";

    try {
      const model = ai.getGenerativeModel({
        model: "gemini-2.5-flash",
      });

      const result = await model.generateContent(prompt);
      // console.log(result)
      const text = result.response.text();

      const moviesArray = text?.split(",");
      // console.log(moviesArray);

      // for each movies - TMDB Search
      const data = moviesArray.map((movie) => searchMoviesTMDB(movie)); // ---- Return Promises
      // console.log(data)

      const movieResults = await Promise.all(data);
      console.log(movieResults);

      dispatch(
        addGPTMovieResults({
          moviesName: moviesArray,
          moviesSearchResult: movieResults,
        })
      );

      console.log("Gemini Result:", text);
    } catch (error) {
      console.error("Gemini Error:", error);
    }
  };

  return (
    <div className="pt-[7%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12 rounded-lg "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchRef}
          type="text"
          placeholder="Search Movie or Web Series"
          className="p-4 m-4 col-span-9 text-white font-semibold border-2 border-gray-500 rounded-lg text-lg bg-black capitalize"
        />
        <button
          className="font-bold bg-gradient-to-b from-red-700 to-red-400 cursor-pointer text-lg hover:from-red-800 hover:to-red-400 col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGPTSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

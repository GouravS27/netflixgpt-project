import { useRef } from "react";
import { GEMINI_API_KEY } from "../../utils/constants";
import { GoogleGenerativeAI } from "@google/generative-ai";

const GptSearchBar = () => {
  const searchRef = useRef(null);

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
      const text = result.response.text();

      console.log("Gemini Result:", text);
    } catch (error) {
      console.error("Gemini Error:", error);
    }
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12 rounded-lg "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchRef}
          type="text"
          placeholder="Search Movie or Web Series"
          className="p-4 m-4 col-span-9 text-white font-semibold border-2 border-gray-500 rounded-lg text-lg bg-black"
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

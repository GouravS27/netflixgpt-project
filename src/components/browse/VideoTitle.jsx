import React, { useState } from "react";

const VideoTitle = ({ title, overview }) => {
  const [hover, setHover] = useState(false);

  // Overview Description on hover maximize the text
  const truncated =
    overview?.split(" ").slice(0, 31).join(" ") +
    (overview?.split(" ").length > 20 ? "…" : "");

  return (
    <div className="w-screen aspect-video pt-[23%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold opacity-90">{title}</h1>
      <p
        className="py-6 text-lg w-3/5 opacity-70 transition-all duration-300 cursor-pointer"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {hover ? overview : truncated}
      </p>
      <div>
        <button className="bg-white text-black p-4 px-12 mr-2 text-lg font-bold rounded-xl opacity-90 cursor-pointer hover:opacity-75">
          ▷ Play
        </button>
        <button className="bg-gray-500/50 text-white p-4 px-8  text-lg font-bold rounded-xl opacity-90 cursor-pointer hover:opacity-75	">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12 w-1/3">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg">{overview}</p>
      <div>
        <button className="bg-gray-500 text-white p-4 px-12 mr-1 text-xl font-bold rounded-xl opacity-50">▷ Play</button>
        <button className="bg-gray-500 text-white p-4 px-12 mr-1 text-xl font-bold rounded-xl opacity-50">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;

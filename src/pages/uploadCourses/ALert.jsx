import React from "react";

const ALert = ({ heading, paragrapgh, CLick }) => {
  return (
    <div className="fixed h-full max-h-screen top-0 left-0 w-full z-50 bg-white/50 flex justify-center items-center">
      <div className="flex flex-col p-8 w-3/5 h-[27rem] shadow-2xl justify-around bg-white max-md:w-4/5 max-sm:w-full">
        <div className="flex flex-col gap-4">
          <h1 className="text-black font-bold text-6xl">{heading}</h1>
          <div className="border-b-2 border-gray-400"></div>
          <p className="text-2xl text-[#222222]">
            {/* Course has Uploaded Successful */}
            {paragrapgh}
          </p>
        </div>
        <button
          type="button"
          onClick={CLick}
          className="w-36 text-xl flex self-end justify-center items-center h-20 bg-blue-600 text-white"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ALert;

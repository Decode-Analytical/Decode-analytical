import React from "react";

const Tracker = ({selectedCourse}) => {
  return (
    <div className="flex gap-5 max-sm:flex-col">
      <button type="button" disabled className={`w-72 p-2 h-20 font-mono text-2xl font-bold rounded-lg border border-[#303030] text-[#303030] ${selectedCourse && "bg-blue-600 text-white"}`}>
        Create New Course
      </button>
      <button type="button" disabled className={`w-72 p-2 h-20 font-mono text-2xl font-bold rounded-lg border border-[#303030] text-[#303030] ${selectedCourse == false && "bg-blue-500 text-white"}`}>
        Create Course Module
      </button>
    </div>
  );
};

export default Tracker;

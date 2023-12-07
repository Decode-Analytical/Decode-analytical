import React from "react";

const Tracker = () => {
  return (
    <div className="flex gap-5">
      <button type="button" disabled className="w-72 p-2 h-20 font-mono text-2xl font-bold rounded-lg border border-[#303030] text-[#303030]">
        Create New Course
      </button>
      <button type="button" disabled className="w-72 p-2 h-20 font-mono text-2xl font-bold rounded-lg border border-[#303030] text-[#303030]">
        Create Course Module
      </button>
    </div>
  );
};

export default Tracker;

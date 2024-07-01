import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className="relative bg-shadow border-none bg-white rounded-lg">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <FiSearch className="text-black" />
      </span>
      <input
        type="text"
        placeholder="Search..."
        className="rounded-lg pl-8 pr-4 py-2 bg-white border-none"
      />
    </div>
  );
};

export default SearchBar;

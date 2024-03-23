import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ placeholder }) => {
  return (
    <div className="relative bg-shadow border-none bg-white rounded-lg max-w-[188px]">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <FiSearch className="text-black" />
      </span>
      <div className="w-4" />
      <input
        type="text"
        placeholder={placeholder ?? "Search..."}
        className="rounded-lg pl-10 pr-4 py-2 bg-white border-none"
      />
    </div>
  );
};

export default SearchBar;

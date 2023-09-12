import React from "react";
import { FaStar } from "react-icons/fa";

function Star() {
  return (
    <div className="flex flex-wrap justify-center  py-3">
      <FaStar className="text-orange-500" />
      <FaStar className="text-orange-500" />
      <FaStar className="text-orange-500" />
      <FaStar className="text-zinc-300" />
      <FaStar className="text-zinc-300" />
    </div>
  );
}

export default Star;

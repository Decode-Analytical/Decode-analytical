import React from "react";
import { FaAngleRight } from "react-icons/fa";

export default function Progress() {
  return (
    <div className="flex justify-between text-xs py-3">
      <div className="flex flex-wrap ">
        <div className="flex items-center ">
          <div className="w-4 border-zinc-500 border rounded-full justify-center flex me-1">
            1
          </div>
          <p>Course Information</p>
          <FaAngleRight className="text-xl text-zinc-400 mx-3" />
        </div>
        <div className="flex items-center text-xs">
          <div className="w-4 border-zinc-500 border rounded-full justify-center flex me-1">
            2
          </div>
          <p>More Info</p>
          <FaAngleRight className="text-xl text-zinc-400 mx-3" />
        </div>
        <div className="flex items-center text-xs">
          <div className="w-4 border-zinc-500 border rounded-full justify-center flex me-1">
            3
          </div>
          <p>More Info</p>
          <FaAngleRight className="text-xl text-zinc-400 mx-3" />
        </div>
        <div className="flex items-center text-xs">
          <div className="w-4 border-zinc-500 border rounded-full justify-center flex me-1">
            4
          </div>
          <p>Payment</p>
        </div>
      </div>

      <button className="border border-zinc-500 p-1">Preview</button>
    </div>
  );
}

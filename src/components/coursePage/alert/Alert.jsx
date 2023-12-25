import React from "react";
import { TiTick } from "react-icons/ti";

const Alert = ({Next}) => {
  return (
    <div className="w-[40%] h-64 bg-white p-6 shadow-2xl shadow-gray-700 flex flex-col justify-between items-center">
        <span className="p-3 rounded-full border border-black/60">
            <TiTick color="green" size={40}/>
        </span>
      <h2 className="text-2xl text-black/70">
        Congratulation!
      </h2>
      <p className="text-sm text-gray-500 ">You have pass the module</p>
        <button
          type="button"
          className="p-4 border bg-blue-200 text-white rounded-md  hover:bg-blue-700 hover:text-white focus:bg-blue-700"
          onClick={Next}
        >
          Continue
        </button>
    </div>
  );
};

export default Alert;

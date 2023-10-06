import React from "react";

const Footer = ({ handleCLick, disabled, Correct }) => {
  return (
    <div className="border-t-2 border-[#999999] text-white w-full flex justify-end md:justify-center">
      <div className="md:w-[61%] w-full flex md:justify-between mt-5 flex-col md:flex-row">
        <div className={`flex gap-6 md:my-0 my-4 ${Correct == null ? "invisible" : "visible"}`}>
            <button type="button" className="w-36 h-14 border-2 border-[#040E53] text-[#040E53]">Back</button>
            <button type="button" disabled={Correct} className={`w-36 h-14 border-2 text-[#040E53] ${Correct != null && Correct ? "border-[#040E53] cursor-pointer" : "border-[#B1B4CA] cursor-default" } `}>Continuse</button>
        </div>
        <button
          type="button"
          disabled={disabled}
          onClick={handleCLick}
          className={` w-40 h-16 p-5 ${disabled ? "bg-[#B1B4CA]" : "bg-[#01051D] cursor-pointer"}`}
        >
          {/* {Correct != null ? "Try Again" : "Check"} */}
          {Correct != null ? Correct ? "Check" : "Try Again": "Check" }
        </button>
      </div>
    </div>
  );
};

export default Footer;

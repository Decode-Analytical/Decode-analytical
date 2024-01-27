import React from "react";

const Footer = ({
  handleNext
}) => {
  return (
    <div className="border border-[#999999] text-white w-full flex justify-end md:justify-center">
      <div className="md:w-[61%] w-full flex md:justify-between mt-5 flex-col md:flex-row">
        <div className={`flex gap-6 md:my-0 my-4`}>
          <button
            type="button"
            className={`w-36 h-14 border-2 text-[#040E53] hover:bg-blue-500 border-[#040E53] cursor-pointer `}
            onClick={() => handleNext()}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;

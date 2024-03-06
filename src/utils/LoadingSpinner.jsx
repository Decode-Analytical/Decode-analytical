import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="border-l-2 border-t-2 border-black border-solid rounded-full h-6 w-6 animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;

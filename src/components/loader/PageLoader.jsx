import React from "react";
import LoadingSpinner from "../LoadingSpinner";

const PageLoader = () => {
  return (
    <div className="shadow-bg h-[80vh] w-full grid place-items-center">
      <LoadingSpinner />
    </div>
  );
};

export default PageLoader;

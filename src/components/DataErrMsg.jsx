import React from "react";

const DataErrMsg = ({ msg }) => {
  return (
    <div className="flex w-full justify-center">
      <p className="mb-5 font-semibold text-sm">
        {msg || "Error fetching data"}
      </p>
    </div>
  );
};

export default DataErrMsg;

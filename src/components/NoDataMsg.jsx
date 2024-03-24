import React from "react";

const NoDataMsg = ({ msg }) => {
  return (
    <div className="flex w-full justify-center">
      <p className="text-lg">{msg || "There are no records to display"}</p>
    </div>
  );
};

export default NoDataMsg;

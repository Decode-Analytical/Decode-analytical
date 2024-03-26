import React from "react";

const Image = ({ ...inputProps }) => {
  return <img {...inputProps} className="h-auto max-w-full" />;
};

export default Image;

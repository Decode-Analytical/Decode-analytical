import React from "react";

const Button = ({ onClick, leftIcon, rightIcon, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center py-3 px-4 rounded-lg font-extrabold gap-2 bg-blue1 text-white ${className}`}
    >
      <div>{leftIcon}</div>
      {children}
      <div>{rightIcon}</div>
    </button>
  );
};

export default Button;

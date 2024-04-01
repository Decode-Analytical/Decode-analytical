import React from "react";

const Button = ({
  onClick,
  leftIcon,
  rightIcon,
  className,
  children,
  py,
  px,
  type,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center ${py ?? "py-3"} ${
        px ?? "px-4"
      } rounded-lg  gap-2 bg-blue1 text-white justify-center ${className}`}
      type={type}
    >
      {leftIcon && <div>{leftIcon}</div>}
      {children}
      {rightIcon && <div>{rightIcon}</div>}
    </button>
  );
};

export default Button;

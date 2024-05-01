import React from "react";

const Avatar = ({ name }) => {
  // Function to generate random background color
  const getRandomColor = () => {
    const colors = [
      "bg-blue-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-red-500",
      "bg-indigo-500",
      "bg-purple-500",
      "bg-pink-500",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Function to extract initials from name
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase();
  };

  return (
    <div
      className={`flex items-center justify-center w-12 h-12 rounded-full text-white ${getRandomColor()}`}
    >
      <span className="text-xl font-semibold">{getInitials(name)}</span>
    </div>
  );
};

export default Avatar;

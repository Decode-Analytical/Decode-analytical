import React from "react";

const colors = [
  "bg-red-500",
  "bg-green-500",
  "bg-blue-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-indigo-500",
  "bg-teal-500",
];

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

const Avatar = ({ firstName, lastName }) => {
  const initials = `${firstName[0]}${lastName[0]}`;
  const backgroundColor = getRandomColor();

  return (
    <div
      className={`${
        size === "xl"
          ? "w-[50px] h-[50px]"
          : size === "sm"
          ? "h-[40px] w-[40px]"
          : ""
      } flex items-center justify-center rounded-full text-white font-bold ${backgroundColor}`}
    >
      {initials}
    </div>
  );
};

export default Avatar;

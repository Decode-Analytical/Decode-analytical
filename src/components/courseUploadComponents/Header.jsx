import React from "react";
import statistic from "../../assets/courseUploadImages/statistic.png";

export default function Header() {
  return (
    <div className="flex flex-wrap justify-between items-center bg-zinc-200 px-5 py-2 shadow-md">
      <h2 className="text-xl font-extrabold">My Course</h2>
      <img src={statistic} alt="statistic" width={50} />
    </div>
  );
}

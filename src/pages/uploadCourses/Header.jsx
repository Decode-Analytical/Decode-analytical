import React from "react";
import statistic from "../../assets/courseUploadImages/statistic.png";

export default function Header() {
  return (
    <div className="flex flex-wrap justify-between items-center bg-zinc-200 px-5 py-2 h-32 shadow-md bg-header-Image bg-repeat-x bg-local bg-contain">
      <h2 className="text-5xl font-extrabold text-[#616161]">My Course</h2>
      <img src={statistic} alt="statistic" width={100} />
    </div>
  );
}

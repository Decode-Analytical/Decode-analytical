import React from "react";
import ProfileLayout from "../../../components/ProfileLayout";
import { ToolCardData } from "../../../utils/Constants";
import { Link } from "react-router-dom";

const ToolCard = ({ icon, title, text, to }) => {
  return (
    <Link to={to}>
      <div className="bg-shadow flex flex-col gap-3 items-center p-16 rounded-lg max-w-[460px] min-h-[350px]">
        <img className="w-12" src={icon} alt={title} />
        <h2 className="font-bold text-center text-[20px]">{title}</h2>
        <p className="text-center px-5 md:px-10">{text}</p>
      </div>
    </Link>
  );
};

const InstructorTools = () => {
  return (
    <ProfileLayout title={"Tools"}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 md:gap-y-[90px] gap-x-[60px] place-items-center">
        {ToolCardData.map(({ icon, title, text, to }, index) => (
          <ToolCard key={index} icon={icon} title={title} text={text} to={to} />
        ))}
      </div>
    </ProfileLayout>
  );
};

export default InstructorTools;

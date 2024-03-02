import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export const Heading = ({ title, ml }) => {
  const navigate = useNavigate();

  return (
    <div className={`flex mb-12 ml-${ml || "0"}`}>
      <button onClick={() => navigate(-1)}>
        <MdArrowBackIos className="text-xl" />
      </button>
      <div className="border-l-2 ml-1 mr-2 border-black opacity-60 " />
      <h2 className="font-bold text-2xl">{title}</h2>
    </div>
  );
};

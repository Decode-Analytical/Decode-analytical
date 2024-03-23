import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { LuSend } from "react-icons/lu";
import { FiEdit } from "react-icons/fi";
import { TbCellSignal5 } from "react-icons/tb";

const Button = ({ Icon, text, danger, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1 ${danger ? "text-[#E81515]" : ""}`}
    >
      <Icon />
      <div>{text}</div>
    </button>
  );
};

const ProgressBar = ({ progress }) => {
  return (
    <div className="relative pt-1">
      <div className="flex flex-col">
        <div className="bg-gray-200 rounded-full">
          <div
            style={{ width: `${progress}%` }}
            className="text-center py-1 text-xs rounded-full bg-blue1"
          ></div>
        </div>
      </div>
    </div>
  );
};

const CourseBanner = ({ ongoing, completed, level, title, progress, img }) => {
  return (
    <div className="bg-shadow rounded-md mt-[45px] pb-[18px] px-[18px] pt-[13px] relative">
      <div className="">
        <div className="flex flex-col sm:flex-row items-center gap-[22px] my-5 sm:my-0 ">
          <div>
            <img
              className="w-[150px] rounded-lg object-cover"
              src={img}
              alt={`${title} image`}
            />
          </div>
          <div className="flex flex-1 flex-col gap-4 w-full px-0">
            <div className="flex justify-between">
              <h2 className="font-semibold text-xl">{title}</h2>
              <div className="flex justify-end absolute right-[15px] top-[7px]">
                {level === "Beginner" ? (
                  <div className="flex items-center gap-1">
                    <TbCellSignal5 />
                    <div>Beginner</div>
                  </div>
                ) : level === "Intermediate" ? (
                  <div className="flex items-center gap-1">
                    <TbCellSignal5 />
                    <div>Intermediate</div>
                  </div>
                ) : level === "Advanced" ? (
                  <div className="flex items-center gap-1">
                    <TbCellSignal5 />
                    <div>Advanced</div>
                  </div>
                ) : null}
              </div>
            </div>
            <ProgressBar progress={progress} />
            <div className="flex gap-3">
              {ongoing ? (
                <Button Icon={LuSend} text={"Publish"} />
              ) : completed ? (
                <Button Icon={FiEdit} text={"Manage/Edit"} />
              ) : null}
              <Button danger Icon={RiDeleteBinLine} text={"Remove"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseBanner;

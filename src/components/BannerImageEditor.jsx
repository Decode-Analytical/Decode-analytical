import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { MdOutlineCrop } from "react-icons/md";
import { MdRotateLeft, MdRotateRight } from "react-icons/md";
import { IoCamera } from "react-icons/io5";
import { HiOutlineTrash } from "react-icons/hi";
import ModalContainer from "./modal/ModalContainer";

const BannerImageEditor = ({ onClose }) => {
  return (
    <ModalContainer
      overlayClose={onClose}
      w="w-[800px]"
      h="h-[500px]"
      // modalClose={handleCoverImagePopup}
      bg={"bg-[#303030]"}
    >
      <div className="flex flex-col justify-between h-full text-white1">
        <div className="flex justify-between gap-5 items-center w-full">
          <p className="text-white1">Profile Banner Image</p>
          <IoCloseSharp
            className="text-white text-2xl cursor-pointer"
            onClick={onClose}
          />
        </div>
        <div className="h-[200px] bg-[#d9d9d966] w-full border-y-[1px]"></div>
        <div className="flex justify-between w-full">
          <div className="flex gap-5">
            <div className="flex flex-col items-center">
              <MdOutlineCrop className="text-2xl" />
              <p>Crop</p>
            </div>
            <div className="flex flex-col items-center">
              <MdRotateLeft className="text-2xl" />
              <p>Rotate Left</p>
            </div>
            <div className="flex flex-col items-center">
              <MdRotateRight className="text-2xl" />
              <p>Rotate Right</p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col items-center">
              <IoCamera className="text-2xl" />
              <p>Add Photo</p>
            </div>
            <div className="flex flex-col items-center">
              <HiOutlineTrash className="text-2xl" />
              <p>Delete</p>
            </div>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

export default BannerImageEditor;

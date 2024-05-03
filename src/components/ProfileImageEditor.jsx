import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { LiaPenSolid } from "react-icons/lia";
import { MdOutlineFileUpload } from "react-icons/md";
import ModalContainer from "./modal/ModalContainer";

const ProfileImageEditor = ({
  onClose,
  profileImg,
  imagePreview,
  uploadBtn,
  onChange,
}) => {
  return (
    <ModalContainer
      overlayClose={onClose}
      w="w-[800px]"
      h="h-[500px]"
      bg={"bg-[#303030]"}
    >
      <div className="flex flex-col justify-between h-full text-white1 items-center">
        <div className="flex justify-between gap-5 items-center w-full">
          <p className="text-white1">Profile Photo</p>
          <IoCloseSharp
            className="text-white text-2xl cursor-pointer"
            onClick={onClose}
          />
        </div>
        <div className="w-[250px] h-[250px] bg-[#d9d9d966] rounded-full overflow-hidden">
          {imagePreview || profileImg ? (
            <img
              className="w-full h-full rounded-full object-cover"
              src={imagePreview ? imagePreview : profileImg}
            />
          ) : (
            <div className="flex justify-center items-center w-full h-full bg-gray-400 rounded-full">
              <IoPerson className="text-[30px] text-white1" />
            </div>
          )}
        </div>
        <div className="flex -mb-8 justify-between w-full">
          <div className="flex gap-5">
            <label
              htmlFor="file"
              className="cursor-pointer flex flex-col items-center"
            >
              <input
                type="file"
                id="file"
                accept="image/*"
                className="hidden"
                onChange={onChange}
              />
              <LiaPenSolid className="text-2xl" />
              <p>Edit Photo</p>
            </label>
          </div>
          <div className="flex">
            <button
              onClick={() => {
                uploadBtn();
                onClose();
              }}
              // disabled={!image}
              className="flex flex-col items-center px-4 text-white rounded-md"
            >
              <MdOutlineFileUpload className="text-3xl" />
              <p>Upload</p>
            </button>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

export default ProfileImageEditor;

import React from "react";
import { IoWarning } from "react-icons/io5";
import LoadingSpinner from "../LoadingSpinner";
import ModalContainer from "../modal/ModalContainer";

const DeleteModal = ({ handleCourseDelete, closePopup, loading, text }) => {
  return (
    <ModalContainer>
      <div className="flex flex-col h-full justify-between">
        <div>
          <div className="flex justify-between border-b-[1px] pb-4">
            <h3 className="font-semibold text-xl">Warning</h3>
            <IoWarning className="text-red-700 text-2xl" />
          </div>
          <div className="mt-4">
            <p>{text}</p>
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <button className="border px-4 py-2 rounded-lg" onClick={closePopup}>
            Cancel
          </button>
          <button
            className="bg-red-700 text-white1 px-4 py-2 rounded-lg"
            onClick={handleCourseDelete}
            disabled={loading}
          >
            {loading ? (
              <div className="w-[66px]">
                <LoadingSpinner color={"white"} />
              </div>
            ) : (
              "Remove"
            )}
          </button>
        </div>
      </div>
    </ModalContainer>
  );
};

export default DeleteModal;

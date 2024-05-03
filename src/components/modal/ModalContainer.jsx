import React from "react";
import { IoCloseSharp } from "react-icons/io5";

const ModalContainer = ({
  children,
  overlayClose,
  noBg,
  h,
  w,
  modalClose,
  bg,
}) => {
  return (
    <div className="relative ">
      <div className="fixed inset-0 flex items-center justify-center z-[1000]">
        <div
          className={`absolute inset-0 bg-gray-900 ${
            noBg ? "opacity-25" : "opacity-50"
          }`}
          onClick={overlayClose}
        ></div>
        <div className="relative ">
          {modalClose && (
            <div
              className="absolute top-5 right-5 cursor-pointer"
              onClick={modalClose}
            >
              <IoCloseSharp />
            </div>
          )}
          <div
            style={noBg && { display: "none" }}
            className={`${
              bg || "bg-white"
            } px-6 md:px-10 pt-6 pb-9 sm:pb-16 rounded-lg shadow-xl z-20 ${
              w || "w-[550px]"
            } ${h || "h-[300px]"} overflow-auto`}
          >
            {children}
          </div>

          {noBg && <div>{children}</div>}
        </div>
      </div>
    </div>
  );
};

export default ModalContainer;

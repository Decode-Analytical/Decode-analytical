import React from "react";

const ModalContainer = ({ children, overlayClose, noBg }) => {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-10">
        <div
          className={`absolute inset-0 bg-gray-900 ${
            noBg ? "opacity-25" : "opacity-50"
          }`}
          onClick={overlayClose}
        ></div>
        {noBg ? (
          <div></div>
        ) : (
          <div className="bg-white px-6 md:px-10 pt-6 pb-9 sm:pb-16 rounded-lg shadow-xl z-20 w-[550px] h-[300px]">
            {children}
          </div>
        )}
        {noBg && <div>{children}</div>}
      </div>
    </>
  );
};

export default ModalContainer;

import React from "react";
import { IoIosWarning } from "react-icons/io";
import ModalContainer from "./ModalContainer";

export const ModalButton = ({ bg, color, onClick, children }) => (
  <button
    className={`${bg && "bg-blue1"} ${
      color ? "text-blue1" : "text-white"
    } font-semibold px-6  rounded-md h-full`}
    onClick={onClick}
    type="submit"
  >
    {children}
  </button>
);

export const ModalInput = ({
  name,
  placeholder,
  onChange,
  value,
  disabled,
}) => (
  <div className="flex w-full flex-1 flex-col">
    <div className="flex flex-1 justify-between w-full">
      <input
        type={"email"}
        name={name}
        placeholder={placeholder}
        className={`border border-gray-400 bg-white1 rounded-md p-[10px] h-full w-full
        `}
        onChange={onChange}
        value={value}
        // {...register}
        disabled={disabled}
        required
      />

      {/* {errorMessage && (
        <div>
          <p className="text-red-500 mt-1 text-xs italic">{errorMessage}</p>
        </div>
      )} */}
    </div>
  </div>
);

export const ModalPrompt = ({
  title,
  text,
  danger,
  warning,
  children,
  overlayClose,
}) => {
  return (
    <ModalContainer overlayClose={overlayClose}>
      <div className="flex flex-col justify-between h-full">
        <div className="mt-4 text-black">
          <div className="flex justify-between w-full">
            <h1 className="text-xl font-semibold  mb-2">{title}</h1>
            {danger && <IoIosWarning className="text-red-700 text-2xl" />}
            {warning && <IoIosWarning className="text-orange-500 text-2xl" />}
          </div>
          <hr className="border-[1px]" />
          <p className="text-gray-700 mt-6">{text}</p>
        </div>
        <div className={`flex  justify-end gap-1 h-10`}>{children}</div>
      </div>
    </ModalContainer>
  );
};

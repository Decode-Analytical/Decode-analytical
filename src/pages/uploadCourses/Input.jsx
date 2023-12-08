import React from "react";

const Input = ({ label, type, placeholder, name, value, onChange, disable = false }) => {
  return (
    <div className="flex gap-2 flex-col w-full">
      <label className="font-semibold text-2xl">{label}</label>
      <input
        name={name}
        disabled={disable}
        value={value}
        onChange={onChange}
        className="border border-black p-3 text-[1.4rem] rounded-2xl bg-transparent"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;

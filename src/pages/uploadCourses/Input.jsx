import React from "react";

const Input = ({ label, type, placeholder, name, value, onChange }) => {
  return (
    <div className="flex gap-2 flex-col">
      <label className="font-semibold text-lg">{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        className="border border-black p-3 text-base"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;

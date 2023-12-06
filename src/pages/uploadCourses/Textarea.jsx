import React from "react";

const Textarea = ({ label, placeholder, onChange, name }) => {
  return (
    <div className="flex flex-col gap-2 my-1">
      <label className="text-lg">{label}</label>
      <textarea
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        className="border border-gray-400 p-3 rounded-md"
      ></textarea>
    </div>
  );
};

export default Textarea;

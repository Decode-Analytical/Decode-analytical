import React from "react";

const Textarea = ({ label, placeholder, onChange, name, value }) => {
  return (
    <div className="flex flex-col gap-2 my-1">
      <label className="text-2xl font-semibold">{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border border-black p-3 rounded-2xl h-28 text-[1.45rem] bg-transparent"
      ></textarea>
    </div>
  );
};

export default Textarea;

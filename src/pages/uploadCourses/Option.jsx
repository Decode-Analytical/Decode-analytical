import React from "react";

const Options = ({ label, options, name, value, onChange, placeholder }) => {
  return (
    <div className="flex gap-1 flex-col w-full">
      <label className="font-semibold text-2xl">{label}</label>
      <select name={name} required id={name} required value={value} onChange={onChange} className="select p-5 text-lg bg-transparent border border-black rounded-lg">
        <option value="" className="isvalid" disabled hidden>
            {placeholder}
        </option>
        {options.map((Soption, index) => (
          <option key={index} value={Soption}>{Soption}</option>
        ))}
      </select>
    </div>
  );
};

export default Options;

import React from "react";

const Options = ({ label, options, name, value, onChange, placeholder }) => {
  return (
    <div className="flex gap-1 flex-col">
      <label className="font-semibold text-lg">{label}</label>
      <select name={name} id={name} required value={value} onChange={onChange} className="select p-2 border border-black rounded-md">
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

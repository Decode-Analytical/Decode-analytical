import React from "react";

const Options = ({ label, options, name, value, onChange, placeholder }) => {
  return (
    <div className="flex gap-1 flex-col">
      <label className="font-semibold text-lg">{label}</label>
      <select name={name} id={name} value={value} onChange={onChange}>
        <option value="" className="text-gray-300" disabled selected hidden>
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

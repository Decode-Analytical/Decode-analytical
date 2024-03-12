import React from "react";

const Input = ({
  title,
  name,
  placeholder,
  onChange,
  value,
  register,
  required,
  disabled,
  errorMessage,
}) => {
  return (
    <div className="flex flex-col gap-3 mt-8">
      <label className="font-light">
        {title}
        <span className="text-red2 text-lg ml-1">*</span>
        <input
          type={"text"}
          name={name}
          id="amount"
          placeholder={placeholder}
          className="border border-gray-400 rounded-md p-2"
          onChange={onChange}
          value={value}
          {...register}
          disabled={disabled}
          required={required}
        />
      </label>
      {errorMessage && (
        <div>
          <p className="text-red-500 text-xs italic">{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Input;

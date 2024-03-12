import React from "react";

export const TextInput = ({
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

export const PasswordInput = ({
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
          type={"password"}
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

export const SelectInput = ({
  title,
  name,
  options,
  onChange,
  value,
  required,
  disabled,
  errorMessage,
  register,
}) => {
  return (
    <div className="flex flex-col gap-3 mt-8">
      <label className="font-light">
        {title}
        <span className="text-red2 text-lg ml-1">*</span>
        <select
          name={name}
          id={name}
          className="border border-gray-400 rounded-md p-2"
          onChange={onChange}
          value={value}
          disabled={disabled}
          required={required}
          {...register}
        >
          <option value="">Select {title}</option>
          {options.map((option, index) => (
            <option key={index} value={option.CBNBankCode}>
              {option.bankName}
            </option>
          ))}
        </select>
      </label>
      {errorMessage && (
        <div>
          <p className="text-red-500 text-xs italic">{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

import React from "react";

export const Input = ({
  title,
  type,
  name,
  placeholder,
  onChange,
  value,
  register,
  required,
  disabled,
  errorMessage,
  notImportant,
}) => {
  return (
    <div className="flex flex-1 flex-col mt-8">
      <label className="font-light">
        {title}
        {notImportant ? "" : <span className="text-red2 text-lg ml-1">*</span>}
        <input
          type={type}
          name={name}
          id="amount"
          placeholder={placeholder}
          className="border border-gray-400 bg-white1 rounded-md p-4"
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

export const TextArea = ({
  title,
  name,
  placeholder,
  onChange,
  value,
  register,
  required,
  disabled,
  errorMessage,
  notImportant,
}) => {
  return (
    <div className="flex flex-col mt-8">
      <div className="flex">
        <label className="font-light">{title}</label>
        {notImportant ? "" : <span className="text-red2 text-lg ml-1">*</span>}
      </div>
      <textarea
        type={"text"}
        name={name}
        id="amount"
        placeholder={placeholder}
        className="border bg-white1 border-gray-400 rounded-md p-4"
        onChange={onChange}
        value={value}
        {...register}
        disabled={disabled}
        required={required}
      />
      {errorMessage && (
        <div>
          <p className="text-red-500 text-xs italic">{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export const BankSelectInput = ({
  title,
  name,
  options,
  onChange,
  value,
  required,
  disabled,
  errorMessage,
  register,
  notImportant,
}) => {
  return (
    <div className="flex flex-col gap-3 mt-8">
      <label className="font-light">
        {title}
        {notImportant ? "" : <span className="text-red2 text-lg ml-1">*</span>}
        <select
          name={name}
          id={name}
          className="border border-gray-400 bg-white1 rounded-md p-4"
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

export const Radio = ({
  title,
  name,
  onChange,
  value,
  required,
  disabled,
  register,
  checked,
  defaultChecked,
}) => {
  return (
    <div className="flex items-center gap-1">
      <input
        className="radio-select"
        onChange={onChange}
        value={value}
        disabled={disabled}
        required={required}
        {...register}
        type="radio"
        name={name}
        id={value}
        checked={checked}
        defaultChecked={defaultChecked}
      />
      <label htmlFor={value} className="font-light">
        {title}
      </label>
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
  valueKey,
  labelKey,
  customClass,
}) => {
  return (
    <div className="flex flex-1 flex-col gap-3 mt-8">
      <label className="font-light">
        {title}
        <span className="text-red2 text-lg ml-1">*</span>
        <select
          name={name}
          id={name}
          className={`${customClass} border border-gray-400 rounded-md p-4 bg-white1`}
          onChange={onChange}
          value={value}
          disabled={disabled}
          required={required}
          {...register}
        >
          <option value="">Select {title}</option>
          {options.map((option, index) => (
            <option key={index} value={option[valueKey]}>
              {option[labelKey]}
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

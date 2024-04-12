import React, { useState } from "react";
import { RxEyeClosed } from "react-icons/rx";
import { PiEyeBold } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";

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
  href, //Temporary
}) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex w-full flex-1 flex-col mt-8">
      <div className="flex justify-between w-full">
        <label className="font-light">
          {title}
          {notImportant ? (
            ""
          ) : (
            <span className="text-red2 text-lg ml-1">*</span>
          )}
        </label>
        {href && (
          <div className="font-semibold cursor-pointer">
            <p onClick={() => navigate(href)}>Create Pin</p>
          </div>
        )}
      </div>
      <div className="relative">
        <input
          type={showPassword ? "text" : type}
          name={name}
          placeholder={placeholder}
          className={`border border-gray-400 bg-white1 rounded-md p-4 pr-12 ${
            errorMessage && "outline-red-500"
          }`}
          onChange={onChange}
          value={value}
          {...register}
          disabled={disabled}
          required={required}
        />
        {type === "password" && (
          <button
            className="absolute inset-y-0 right-0 flex items-center px-4 bg-transparent border-transparent"
            onClick={togglePasswordVisibility}
            type="button"
          >
            {showPassword ? <PiEyeBold /> : <RxEyeClosed />}
          </button>
        )}
      </div>

      {errorMessage && (
        <div>
          <p className="text-red-500 mt-1 text-xs italic">{errorMessage}</p>
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
  onClick,
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
        onClick={onClick}
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
    <div className="flex flex-1 flex-col mt-8">
      <label className="font-light">
        {title}
        <span className="text-red2 text-lg ml-1">*</span>
        <select
          name={name}
          id={name}
          className={`${customClass} border border-gray-400 rounded-md p-[17px] bg-white1`}
          onChange={onChange}
          value={value}
          disabled={disabled}
          required={required}
          {...register}
        >
          <option value="">Select {title}</option>
          {options?.map((option, index) => (
            <option key={index} value={valueKey ? option[valueKey] : option}>
              {labelKey ? option[labelKey] : option}
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

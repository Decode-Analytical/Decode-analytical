import React, { useState } from "react";
import { RxEyeClosed } from "react-icons/rx";
import { PiEyeBold } from "react-icons/pi";

export const Input = ({
  label,
  type,
  name,
  placeholder,
  onChange,
  value,
  register,
  required,
  disabled,
  errorMessage,
  important,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex w-full flex-1 flex-col mt-2">
      <div>
        {label && (
          <label className="font-light">
            {label}
            {important ? <span className="text-red2 text-lg ml-1">*</span> : ""}
          </label>
        )}
      </div>
      <div className="relative">
        <input
          type={showPassword ? "text" : type}
          name={name}
          placeholder={placeholder}
          className={`border ${
            errorMessage ? "border-red-500" : "border-gray-400"
          }  bg-white1 rounded-md px-4 py-2 sm:py-4 disabled:bg-gray-100 ${
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
      <div className="h-5">
        {errorMessage && (
          <div>
            <p className="text-red-500 mt-1 text-xs italic">{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export const TextArea = ({
  label,
  name,
  placeholder,
  onChange,
  value,
  register,
  required,
  disabled,
  errorMessage,
  important,
}) => {
  return (
    <div className="flex flex-col mt-2">
      <div className="flex">
        <label className="font-light">{label}</label>
        {important ? <span className="text-red2 text-lg ml-1">*</span> : ""}
      </div>
      <textarea
        type={"text"}
        name={name}
        id="amount"
        placeholder={placeholder}
        className={`border ${
          errorMessage ? "border-red-500" : "border-gray-400"
        }  bg-white1 rounded-md p-4 disabled:bg-gray-100 ${
          errorMessage && "outline-red-500"
        }`}
        onChange={onChange}
        value={value}
        {...register}
        disabled={disabled}
        required={required}
      />
      <div className="h-5">
        {errorMessage && (
          <div>
            <p className="text-red-500 text-xs italic">{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export const BankSelectInput = ({
  label,
  name,
  options,
  onChange,
  value,
  required,
  disabled,
  errorMessage,
  register,
  important,
}) => {
  return (
    <div className="flex flex-col gap-1 mt-6">
      <label className="font-light">
        {label}
        {important ? <span className="text-red2 text-lg ml-1">*</span> : ""}
        <select
          name={name}
          id={name}
          className={`border ${
            errorMessage ? "border-red-500" : "border-gray-400"
          } ${
            errorMessage && "outline-red-500"
          }  bg-white1 rounded-md px-4 py-2 sm:py-4 disabled:bg-gray-100`}
          onChange={onChange}
          value={value}
          disabled={disabled}
          required={required}
          {...register}
        >
          <option value="">Select {label}</option>
          {options.map((option, index) => (
            <option key={index} value={option.CBNBankCode}>
              {option.bankName}
            </option>
          ))}
        </select>
      </label>
      <div className="h-5">
        {errorMessage && (
          <div>
            <p className="text-red-500 text-xs italic">{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export const Radio = ({
  label,
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
        {label}
      </label>
    </div>
  );
};
export const Checkbox = ({
  label,
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
    <div className="flex gap-1">
      <span className="flex items-start">
        <input
          className="checkbox-select"
          onChange={onChange}
          value={value}
          disabled={disabled}
          required={required}
          {...register}
          type="checkbox"
          name={name}
          id={value}
          checked={checked}
          defaultChecked={defaultChecked}
          onClick={onClick}
        />
      </span>
      <label htmlFor={value} className="font-light">
        {label}
      </label>
    </div>
  );
};

export const SelectInput = ({
  label,
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
    <div className="flex flex-1 flex-col mt-2">
      <label className="font-light">
        {label}
        <span className="text-red2 text-lg ml-1">*</span>
        <select
          name={name}
          id={name}
          className={`${customClass} border rounded-md  py-2 md:py-[17px] px-[17px] bg-white1 disabled:bg-gray-100 ${
            errorMessage ? "border-red-500" : "border-gray-400"
          } ${errorMessage && "outline-red-500"}`}
          onChange={onChange}
          value={value}
          disabled={disabled}
          required={required}
          {...register}
        >
          <option value="">Select {label}</option>
          {options?.map((option, index) => (
            <option key={index} value={valueKey ? option[valueKey] : option}>
              {labelKey ? option[labelKey] : option}
            </option>
          ))}
        </select>
      </label>
      <div className="h-5">
        {errorMessage && (
          <div>
            <p className="text-red-500 text-xs italic">{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

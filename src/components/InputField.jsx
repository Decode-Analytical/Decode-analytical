import React, { useState } from "react";
import { RxEyeClosed } from "react-icons/rx";
import { PiEyeBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";

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
  href,
  customClass,
  isPinCreated,
  defaultValue,
  ...inputProps
}) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex w-full flex-1 flex-col mt-2">
      <div className="flex justify-between w-full">
        {label && (
          <label className="font-light">
            {label}
            {important ? <span className="text-red2 text-lg ml-1">*</span> : ""}
          </label>
        )}
        {href && !isPinCreated && (
          <div className="font-semibold cursor-pointer">
            <p onClick={() => navigate(href)}>Don't have a Pin?</p>
          </div>
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
          } ${customClass}`}
          autoComplete="off"
          onChange={onChange}
          value={value}
          {...register}
          disabled={disabled}
          required={required}
          {...inputProps}
          defaultValue={defaultValue}
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

export const AnswerInput = ({
  type,
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
    <div className="flex flex-1 flex-col mt-8">
      <input
        type={type}
        name={name}
        id="amount"
        placeholder={placeholder}
        className="border border-gray-400 bg-white1 rounded-md px-4 py-2"
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
  defaultValue,
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
        defaultValue={defaultValue}
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
          }  bg-white1 rounded-md text-black px-4 py-2 sm:py-4 disabled:bg-gray-100`}
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
    <>
      <div className="flex flex-1 flex-col my-2">
        <label className="font-light">
          {label}
          <span className="text-red2 text-lg ml-1">*</span>
          <select
            name={name}
            id={name}
            className={`${customClass} border rounded-md py-3 md:py-[17px] px-[17px] bg-white1 disabled:bg-gray-100 ${
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

      {/* Others option for input select */}
      {/* {othersValue && (
        <div className="flex w-full flex-1 flex-col mt-2">
          <div className="flex justify-between w-full">
            {othersTitle && (
              <label className="font-light">
                {othersTitle}
                <span className="text-red2 text-lg ml-1">*</span>
              </label>
            )}
          </div>
          <div className="relative">
            <input
              type="text"
              // name={name}
              placeholder="Enter Course Title"
              className={`border ${
                othersErrorMessage ? "border-red-500" : "border-gray-400"
              }  bg-white1 rounded-md px-4 py-2 sm:py-4 disabled:bg-gray-100 ${
                othersErrorMessage && "outline-red-500"
              } ${customClass}`}
              autoComplete="off"
              // onChange={onChange}
              // value={value}
              {...othersRegister}
              // disabled={disabled}
              // required={required}
              // {...inputProps}
              // defaultValue={defaultValue}
            />
          </div>
          <div className="h-5">
            {othersErrorMessage && (
              <div>
                <p className="text-red-500 mt-1 text-xs italic">
                  {othersErrorMessage}
                </p>
              </div>
            )}
          </div>
        </div>
      )} */}
    </>
  );
};

export const SelectChoice = ({
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
      <select
        name={name}
        id={name}
        className={`${customClass} border border-gray-400 rounded-md p-2 bg-white1`}
        onChange={onChange}
        value={value}
        disabled={disabled}
        required={required}
        {...register}
      >
        <option value="">Multiple Choices</option>
        {options.map((option, index) => (
          <option key={index} value={option[valueKey]}>
            {option[labelKey]}
          </option>
        ))}
      </select>

      {errorMessage && (
        <div>
          <p className="text-red-500 text-xs italic">{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

// export const ImageInput = ({
//   title,
//   name,
//   placeholder,
//   onChange,
//   value,
//   register,
//   required,
//   disabled,
//   errorMessage,
//   notImportant,
// }) => {
//   return (
//     <div className="flex flex-col mt-8">
//       <div className="flex">
//         <label className="font-light">{title}</label>
//         {notImportant ? "" : <span className="text-red2 text-lg ml-1">*</span>}
//       </div>
//       <input
//         type={"file"}
//         name={name}
//         id="amount"
//         placeholder={placeholder}
//         className="border bg-white1 border-gray-400 rounded-md p-4 flex justify-center"
//         onChange={onChange}
//         value={value}
//         {...register}
//         disabled={disabled}
//         required={required}
//       />
//       {errorMessage && (
//         <div>
//           <p className="text-red-500 text-xs italic">{errorMessage}</p>
//         </div>
//       )}
//     </div>
//   );
// };

export const ImageInput = ({
  title,
  name,
  options,
  onChange,
  value,
  required,
  placeholder,
  disabled,
  errorMessage,
  register,
  valueKey,
  labelKey,
  customClass,
  notImportant,
}) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative flex flex-col mt-8">
      {/* Image Preview */}
      {image && (
        <img src={image} alt="Preview" className="block w-full h-auto mb-4" />
      )}

      <div className="flex">
        <label className="font-light">{title}</label>
        {notImportant ? "" : <span className="text-red2 text-lg ml-1">*</span>}
      </div>
      {/* Image Input Field */}
      <input
        type="file"
        name={name}
        id="amount"
        placeholder={placeholder}
        className="border bg-white1 border-gray-400 rounded-md p-4 flex justify-center"
        onChange={handleImageChange}
        value={value}
        {...register}
        disabled={disabled}
        required={required}
        accept="image/*"
        // className="appearance-none border border-gray-300 rounded py-2 px-4 block w-full leading-tight focus:outline-none focus:border-blue-500"
      />
      {errorMessage && (
        <div>
          <p className="text-red-500 text-xs italic">{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default function FileUpload({ onDrop, className, important, label }) {
  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    accept: { "image/*": [], "video/*": [] },
    maxFiles: 1, // Set maxFiles to 1 to accept only one file
    onDrop,
  });

  return (
    <div className="w-full mt-2 cursor-pointer">
      {label && (
        <label className="font-light">
          {label}
          {important ? <span className="text-red2 text-lg ml-1">*</span> : ""}
        </label>
      )}
      <div {...getRootProps({ className: className })}>
        <input {...getInputProps()} />
        <div className="flex flex-col gap-2">
          <button
            type="button"
            onClick={open}
            // className="border bg-white1 border-gray-400 border-dashed rounded-md p-4 flex justify-center "
            className={`border bg-white1 rounded-md px-4 py-2 sm:py-4 disabled:bg-gray-100 `}
          >
            Browse
          </button>
          <aside>
            {acceptedFiles.length > 0 && (
              <h4>Selected File: {acceptedFiles[0].name}</h4>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}

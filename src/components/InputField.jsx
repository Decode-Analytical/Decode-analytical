import React, { useState} from "react";

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




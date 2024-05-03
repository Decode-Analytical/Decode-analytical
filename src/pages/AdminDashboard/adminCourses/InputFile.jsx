import React from "react";
import { useDropzone } from "react-dropzone";


 export const Input = ({ label, type, placeholder, name, value, onChange, disable = false, notImportant, required= true }) => {
  return (
    <div className="flex gap-2 flex-col w-full">
      <label className=" text-2xl">{label}
      {notImportant ? "" : <span className="text-red2 text-lg ml-1">*</span>}</label>
      <input
        name={name}
        disabled={disable}
        required={required}
        value={value}
        onChange={onChange}
        className="border border-black p-3 text-[1.4rem] rounded-2xl bg-transparent"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export const Textarea = ({ label, placeholder, onChange, name, value, notImportant }) => {
    return (
      <div className="flex flex-col gap-2 my-1">
        <label className="text-2xl">{label}
        {notImportant ? "" : <span className="text-red2 text-lg ml-1">*</span>}</label>
        <textarea
          name={name}
          value={value}
          required
          onChange={onChange}
          placeholder={placeholder}
          className="border border-black p-3 rounded-2xl h-28 text-[1.45rem] bg-transparent"
        ></textarea>
      </div>
    );
  };

  export const Options = ({ label, options, name, value, onChange, placeholder, notImportant }) => {
    return (
      <div className="flex gap-1 flex-col w-full">
        <label className="text-2xl">{label}
        {notImportant ? "" : <span className="text-red2 text-lg ml-1">*</span>}</label>
        <select
          name={name}
          id={name}
          required
          value={value}
          onChange={onChange}
          className="select p-5 text-lg bg-transparent border-black rounded-lg"
        >
          <option value="" className="isvalid" disabled hidden>
            {placeholder}
          </option>
          {options.map((Soption, index) => (
            <option key={index} value={Soption}>
              {Soption}
            </option>
          ))}
        </select>
      </div>
    );
  };


  export default function FileUpload ({ onDrop, className, notImportant, label }) {
    const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
      accept: { "image/*": [] },
      maxFiles: 1, // Set maxFiles to 1 to accept only one file
      onDrop,
    });
  
    return (
        <div>
            <label className="text-2xl">{label}
            {notImportant ? "" : <span className="text-red2 text-lg ml-1">*</span>}</label>
            <div {...getRootProps({ className: className })}>
            <input {...getInputProps()} />
            <div className="flex flex-col gap-2">
                <button
                type="button"
                onClick={open}
                className="w-44 h-12 rounded-md outline-dashed outline-gray-400"
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



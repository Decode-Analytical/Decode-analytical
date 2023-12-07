import React from "react";
import { useDropzone } from "react-dropzone";

export default function FileUpload({ onDrop, className }) {
  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    accept: { "image/*": [] },
    maxFiles: 1, // Set maxFiles to 1 to accept only one file
    onDrop,
  });

  console.log(acceptedFiles.length);

  return (
    <div {...getRootProps({ className: className })}>
      <input {...getInputProps()} />
      <div className="flex flex-col gap-2">
        <button
          type="button"
          onClick={open}
          className="w-32 h-12 rounded-md outline-dashed outline-gray-400"
        >
          Open File Dialog
        </button>
        <aside>
          {acceptedFiles.length > 0 && (
            <h4>Selected File: {acceptedFiles[0].name}</h4>
          )}
        </aside>
      </div>
    </div>
  );
}
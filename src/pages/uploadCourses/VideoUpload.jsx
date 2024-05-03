import React from 'react'
import { useDropzone } from 'react-dropzone';

const VideoUpload = ({ onDrop, className,notImportant, label }) => {
    const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
        accept: { "video/*": [] },
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
                Browser
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

export default VideoUpload
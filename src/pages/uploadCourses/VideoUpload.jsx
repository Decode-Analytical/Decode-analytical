import React from 'react'
import { useDropzone } from 'react-dropzone';

const VideoUpload = ({ onDrop, className }) => {
    const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
        accept: { "video/*": [] },
        maxFiles: 1, // Set maxFiles to 1 to accept only one file
        onDrop,
      });
    
      return (
        <div {...getRootProps({ className: className })}>
          <input {...getInputProps()} />
          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={open}
              className="w-44 h-12 rounded-md outline-dashed outline-gray-400"
            >
              Browser or Drop an Video
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

export default VideoUpload
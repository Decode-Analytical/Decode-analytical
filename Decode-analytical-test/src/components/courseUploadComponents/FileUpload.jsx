import React, { useState } from "react";

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  // Function to handle the file input change
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  // Function to handle the file upload
  const handleFileUpload = () => {
    if (selectedFile) {
      // server
      console.log("Uploading file:", selectedFile.name);
    } else {
      console.log("No file selected");
    }
  };

  return (
    <div>
      <label htmlFor="title" className="font-bold text-sm">
        Cover Image
      </label>
      <div className="border-2 border-dashed h-44 items-center flex">
        <input
          type="file"
          onChange={handleFileChange}
          className="center w-1/2"
        />
      </div>
    </div>
  );
}

export default FileUpload;

import React from "react";
import ContentInfo from "./ContentInfo";

function ModuleInfo({
  moduleData,
  handleInputChange,
  error,
  isLoading,
  handleMediaFileChange,
  handleModuleAdd,
  handleAudio,
  handleImage,
  handleVideo
}) {
  return (
    <div>
      <h2 className="text-sm font-bold my-3">Course Module Information</h2>
      <label className="font-bold text-sm">
        Title:
        <input
          className="p-2"
          type="text"
          name="module_title"
          value={moduleData.module_title}
          onChange={handleInputChange}
          placeholder="Module Title"
        />
      </label>
      <label className="font-bold text-sm">
        Duration (in hours):
        <input
          className="p-2"
          type="text"
          name="module_duration"
          value={moduleData.module_duration}
          onChange={handleInputChange}
          placeholder="Module Duration"
        />
      </label>
      {/* <ContentInfo
        error={error}
        isLoading={isLoading}
        moduleData={moduleData}y
        handleInputChange={handleInputChange}
        handleMediaFileChange={handleMediaFileChange}
        handleModuleAdd={handleModuleAdd}
      /> */}
      <label className="font-bold text-sm">
        Description:
        <textarea
          name="module_description"
          value={moduleData.module_description}
          onChange={handleInputChange}
          placeholder="Module Description"
          className="w-full h-28 bg-zinc-100" 
        />
      </label>
      <label className="font-bold text-sm">
        Upload Image:
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImage}
        />
      </label>
      <label className="font-bold text-sm">
        Upload Audio:
        <input
          type="file"
          name="audio"
          accept="audio/*"
          onChange={handleAudio} 
        />
      </label>

      <label className="font-bold text-sm">
        Upload Video:
        <input
          type="file"
          name="video"
          accept="video/*"
          onChange={handleVideo} 
        />
      </label>
      
    </div>
  );
}

export default ModuleInfo;

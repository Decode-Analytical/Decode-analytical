import React from "react";
import ContentInfo from "./ContentInfo";

function ModuleInfo({
  moduleData,
  handleInputChange,
  error,
  isLoading,
  handleInput,
  handleMediaFileChange,
  handleModuleAdd,
}) {
  return (
    <div>
      <h2 className="text-sm font-bold my-3">Course Module Information</h2>
      <label className="font-bold text-sm">
        Title:
        <input
          className="p-2"
          type="text"
          name="title"
          value={moduleData.title}
          onChange={handleInputChange}
          placeholder="Module Title"
        />
      </label>
      <label className="font-bold text-sm">
        Duration (in hours):
        <input
          className="p-2"
          type="number"
          name="duration"
          value={moduleData.duration}
          onChange={handleInputChange}
          placeholder="Module Duration"
        />
      </label>
      <ContentInfo
        error={error}
        isLoading={isLoading}
        moduleData={moduleData}
        handleInput={handleInput}
        handleMediaFileChange={handleMediaFileChange}
        handleModuleAdd={handleModuleAdd}
      />
      <label className="font-bold text-sm">
        Description:
        <textarea
          name="description"
          value={moduleData.description}
          onChange={handleInputChange}
          placeholder="Module Description"
          className="w-full h-28 bg-zinc-100" // Adjusted width
        />
      </label>
      <label className="font-bold text-sm">
        Price:
        <input
          className="p-2"
          name="price"
          type="number" // Added type="number"
          value={moduleData.price}
          onChange={handleInputChange}
          placeholder="Module Price"
        />
      </label>
    </div>
  );
}

export default ModuleInfo;

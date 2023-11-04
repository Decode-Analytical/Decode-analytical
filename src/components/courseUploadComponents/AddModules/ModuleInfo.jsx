import React from "react";
import ContentInfo from "./ContentInfo";

function ModuleInfo({
  moduleData,
  handleInputChange,
  error,
  isLoading,
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
      <ContentInfo
        error={error}
        isLoading={isLoading}
        moduleData={moduleData}y
        handleInputChange={handleInputChange}
        handleMediaFileChange={handleMediaFileChange}
        handleModuleAdd={handleModuleAdd}
      />
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
        Price:
        <input
          className="p-2"
          name="price"
          type="text" 
          value={moduleData.price}
          onChange={handleInputChange}
          placeholder="Module Price"
        />
      </label>
      <label className="font-bold text-sm">
        Paid:
        <input
          className="p-2"
          name="paid"
          type="text" 
          value={moduleData.paid}
          onChange={handleInputChange}
          placeholder="Module Price"
        />
      </label>
    </div>
  );
}

export default ModuleInfo;

import React from 'react';

function ContentInfo({
  moduleData,
  handleInputChange,
  handleMediaFileChange,
  error,
  isLoading
}) {
  
  return (
    <div>
      <label className="font-bold text-sm">
        Content Type:
        <select
          className="p-2"
          name="contentType"
          value={moduleData.contentType}
          onChange={handleInputChange}
        >
          <option value="video">Video</option>
          <option value="audio">Audio</option>
        </select>
      </label>
      {moduleData.contentType === 'video' || moduleData.contentType === 'audio' ? (
        <div className="mt-4">
          <label className="font-bold text-sm">
            Upload {moduleData.contentType === 'video' ? 'Video' : 'Audio'}:{' '}
          </label>
          <div className="border-2 border-zinc-500 border-dashed h-28 items-center flex">
            <input
              className="p-2 center w-1/2"
              type="file"
              accept={`${moduleData.contentType}/*`}
              onChange={handleMediaFileChange}
            />
          </div>
        </div>
      ) : null}
      {error && (
        <p className="text-red-500 text-sm mt-2">{error}</p> 
      )}
    </div>
  );
}

export default ContentInfo;

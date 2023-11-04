import React, { useState } from "react";

function VideoUpload() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [error, setError] = useState(null);

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.type.startsWith("video/")) {
        setSelectedVideo(file);
        setError(null);
      } else {
        setError("Please select a valid video file.");
        setSelectedVideo(null);
      }
    }
  };

  return (
    <div className="mt-5">
     <label htmlFor="title" className="font-bold text-sm">Sales video</label>
     <div className="border-2 border-dashed h-44 items-center flex">
      <input type="file" accept="video/*" onChange={handleVideoUpload}  className="center w-1/2" />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {/* {selectedVideo && (
        <div>
          <h3>Selected Video:</h3>
          <p>File Name: {selectedVideo.name}</p>
          <p>File Size: {selectedVideo.size} bytes</p>
        </div>
      )} */}
      </div>
    </div>
  );
}

export default VideoUpload;

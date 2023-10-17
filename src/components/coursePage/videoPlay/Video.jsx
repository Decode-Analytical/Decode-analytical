import React, { useState, useRef, useEffect } from "react";
import controlImage from "./control.png";
import volumnImage from "./volume.png";
import cc from "./bi_badge-cc-fill.png";
import setting from "./Setting.png";
import reszing from "./Resizing.png";
import Background from "./BackgroudScreen.png";
import DefaultSize from "./DefaultSize.png";

const Video = ({
  fullScreen,
  handleFullScreen,
  video,
  image,
  Nextplay,
  modules,
}) => {
  const [FetchData, setFetchData] = useState([]);
  // useEffect(() => {}
  const videoRef = useRef(null);
  const [volume, setVolume] = useState(1);
  const [currentMinutes, setCurrentMinutes] = useState("0:00");
  const [duration, setDuration] = useState("0:00");
  const [progress, setProgress] = useState("0%");
  const [isPlaying, setIsPlaying] = useState(false);
  const [hiddenVolumn, setHiddenVolumn] = useState(false);
  const [hiddenControl, setHiddenControl] = useState(true);
  const [VideoImageTracker, setVideoImageTracker] = useState({
    video: "",
    image: "",
  });

  // if (currentMinutes === duration) {
  //   Nextplay(true);
  //   Nextplay(false)
  //   console.log(video)
  // }
  // Nextplay(false)
  const handleVolume = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    videoRef.current.volume = newVolume;
  };

  const handleTime = () => {
    const video = videoRef.current;
    if (!video) return;

    let currentminutes = Math.floor(video.currentTime / 60);
    let currentseconds = Math.floor(video.currentTime - currentminutes * 60);
    let durationminutes = Math.floor(video.duration / 60);
    let durationseconds = Math.floor(video.duration - durationminutes * 60);

    setCurrentMinutes(
      `${currentminutes}:${currentseconds.toString().padStart(2, "0")}`
    );
    setDuration(
      `${durationminutes}:${durationseconds.toString().padStart(2, "0")}`
    );

    // Check if both duration and currentMinutes are not "0:00"
    if (duration !== "0:00" && currentMinutes !== "0:00") {
      setProgress(
        ((video.currentTime / video.duration) * 100).toString() + "%"
      );

      if (currentMinutes === duration) {
        // Video has ended, move to the next video.
        console.log("currectSecond", currentMinutes);
        console.log("duration", duration);
        setCurrentMinutes("0:00");
        setDuration("0:01");
        // setVideoImageTracker({
        //   video: "",
        //   image: ""
        // })
        Nextplay(true);
        // alert("Video is complete");
      }
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (modules) {
      console.log(modules);
      setVideoImageTracker({
        video: modules.video[0].path,
        image: Background,
      });
      // video.src = VideoImageTracker.video
      // console.log("VideoImageTracker", duration)
    }
  }, [modules]);

  useEffect(() => {
    const video = videoRef.current;
    if (VideoImageTracker.video && video) {
      video.src = VideoImageTracker.video;
      setIsPlaying(true)
    }
  }, [VideoImageTracker]);

  const [isDragging, setIsDragging] = useState(false);

  const handlePlayandPause = () => {
    const video = videoRef.current;
    // if(currentMinutes === duration){
    // }
    if (video.paused) {
      video.play().then(() => {
        setIsPlaying(true);
        // console.log(IS)
      });
    } else {
      video.pause();
      setIsPlaying(false);
    }

    if (hiddenVolumn === true) {
      setHiddenVolumn(false);
    }
  };

  const handleProgressBarMouseDown = () => {
    setIsDragging(true);
  };

  const handleProgressBarMouseMove = (e) => {
    if (!isDragging) return;

    const video = videoRef.current;
    if (!video) return;

    const pos = (e.nativeEvent.offsetX / e.target.offsetWidth) * video.duration;
    video.currentTime = pos;
  };

  const handleProgressBarMouseUp = () => {
    setIsDragging(false);
  };

  const handleProgressBarClick = (e) => {
    const video = videoRef.current;
    if (!video) return;

    const pos = (e.nativeEvent.offsetX / e.target.offsetWidth) * video.duration;
    video.currentTime = pos;
  };

  const HandleVolumnHidden = () => {
    setHiddenVolumn(!hiddenVolumn);
  };
  return (
    <div
      className="relative h-fit flex justify-center items-center"
      onMouseOver={() => setHiddenControl(!hiddenControl)}
      onMouseOut={() => setHiddenControl(!hiddenControl)}
    >
      <img
        src={controlImage}
        className={`${isPlaying ? "hidden" : "absolute"} md:w-28 w-14 `}
        // onClick={handlePlayandPause}
      />
      <video
        // src={VideoImageTracker.video}
        id="video"
        ref={videoRef}
        onTimeUpdate={handleTime}
        onClick={() => handlePlayandPause()}
        autoPlay
        preload="auto"
        className={`w-full object-cover ${isPlaying ? "block" : "block"}`}
        poster={VideoImageTracker.image}
      />
      {/* <img
        src={VideoImageTracker.image}
        className={`w-full object-cover ${isPlaying ? "hidden" : "block"}`}
        alt={isPlaying ? "Click to Pause" : "Click to Play"}
        onClick={handlePlayandPause}
      /> */}
      <div className="absolute left-0 right-0 bottom-5 z-50 mx-2">
        <ul
          className={`${
            hiddenControl
              ? "flex items-center justify-around mx-3"
              : "flex items-center justify-around mx-3"
          } `}
        >
          <li>
            <p className="text-[#ffff] text-[12px] w-16 xl:font-medium  max-sm:w-20">
              <span className="">{currentMinutes}</span> /{" "}
              <span className="">{duration}</span>
            </p>
          </li>
          <li
            className="md:w-[64%] w-[49%] rounded-full h-2 cursor-pointer bg-gray-300"
            onClick={handleProgressBarClick}
          >
            <div
              className="h-2 bg-[#E72020] rounded-full"
              style={{ width: progress }}
              onClick={handleProgressBarClick}
              onMouseDown={handleProgressBarMouseDown}
              onMouseMove={handleProgressBarMouseMove}
              onMouseUp={handleProgressBarMouseUp}
            ></div>
          </li>
          <li>
            <button type="button">
              <img
                src={volumnImage}
                alt="volumn"
                className="md:w-5 w-3 cursor-pointer"
                onClick={HandleVolumnHidden}
              />
            </button>
            <input
              type="range"
              min="0"
              max="1"
              value={volume}
              onChange={handleVolume}
              step="0.1"
              className={`${
                hiddenVolumn ? "block" : "hidden"
              } transform -rotate-90 origin-left absolute bottom-[14px] ml-3`}
            />
          </li>
          <li className="h-6">
            <button type="button" className="md:w-5 w-3">
              <img src={cc} alt="cc" className="w-6 cursor-pointer" />
            </button>
          </li>
          <li className="h-6">
            <button type="button" className="md:w-5 w-3">
              <img src={setting} alt="setting" className="cursor-pointer" />
            </button>
          </li>
          <li className="h-6 md:block hidden">
            <button type="button" className="md:w-5 w-3">
              <img
                src={fullScreen ? DefaultSize : reszing}
                alt="reszing"
                className="cursor-pointer"
                onClick={() => handleFullScreen()}
              />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Video;

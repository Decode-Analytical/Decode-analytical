import React, { useState, useRef } from "react";
import controlImage from "./control.png";
import volumnImage from "./volume.png";
import cc from "./bi_badge-cc-fill.png";
import setting from "./Setting.png";
import reszing from "./Resizing.png";
import Background from "./BackgroudScreen.png";
import DefaultSize from './DefaultSize.png'

const Video = ({ fullScreen, handleFullScreen }) => {
  // const { fullScreen, handleFullScreen } = props
  const videoRef = useRef(null);
  const [volume, setVolume] = useState(1);
  const [currentMinutes, setCurrentMinutes] = useState("0:00");
  const [duration, setDuration] = useState("0:00");
  const [progress, setProgress] = useState("0%");
  const [isPlaying, setIsPlaying] = useState(false);
  const [hiddenVolumn, setHiddenVolumn] = useState(false);
  const [hiddenControl, setHiddenControl] = useState(true);

  const handlePlayandPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
    if (hiddenVolumn == true) {
      setHiddenVolumn(false);
    }
  };

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
    setProgress(((video.currentTime / video.duration) * 100).toString() + "%");
  };

  const handleProgressBarClick = (e) => {
    const video = videoRef.current;
    if (!video) return;

    const pos =
      (e.pageX - (e.target.offsetLeft + e.target.offsetParent.offsetLeft)) /
      e.target.offsetWidth;
    video.currentTime = pos * video.duration;
  };

  const Fullscreen = () => {
    if (isPlaying) {
      const video = videoRef.current;
      if (!video) return;

      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.mozRequestFullscreen) {
        video.mozRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
    } else {
      alert("Please play video first");
    }
  };

  const HandleVolumnHidden = () => {
    setHiddenVolumn(!hiddenVolumn);
  };
  return (
    // <div className=" w-full h-full">
    //   <div className="relative lg:h-[24.3rem] xl:h-[37rem] sm:h-[27rem]">
    //     <video
    //       src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    //       //    className={`${isPlaying ? 'w-full h-full' : "hidden"}`}
    //       className="w-full h-full"
    //       id="video"
    //       ref={videoRef}
    //       onTimeUpdate={handleTime}
    //       onClick={handlePlayandPause}
    //       poster={Background}
    //       onMouseOver={() => setHiddenControl(!hiddenControl)}
    //       onMouseOut={() => setHiddenControl(!hiddenControl)}
    //     ></video>
    //   </div>
    //   <img
    //     src={controlImage}
    //     onClick={handlePlayandPause}
    //     className={`w-20 h-[75.88px] rounded-full z-50 absolute top-28 left-1/3 sm:top-60 sm:left-[21rem] xl:top-[21rem] xl:left-[30rem] ${
    //       isPlaying ? "hidden" : "block"
    //     } `}
    //   />
    //   <div
    //     className={`absolute sm:w-[92%] sm:bottom-[3.6rem] bottom-[16.8rem] lg:bottom-[5.6rem] xl:bottom-[6.9rem] 2xl:bottom-[5.9rem] xl:gap-6 lg:w-[65%] gap-3 md:mx-5 sm:mx-2 md:w-2/3 w-full items-center flex`}
    //   >
    //     <p className="text-[#ffff] text-smR w-16 xl:font-medium  max-sm:w-20">
    //       <span className="">{currentMinutes}</span> /{" "}
    //       <span className="">{duration}</span>
    //     </p>
    //     {/* <progress max="100" min="0" className="md:w-[65%] h-2 rounded-full bg-[#FFFFF] [&::-moz-progress-bar]:bg-[#E72020] cursor-pointer " onClick={handleProgressBarClick} value={progress}></progress> */}
    //     <div className="w-[79%] rounded-full h-2 cursor-pointer bg-gray-300">
    //       <div
    //         className="h-2 bg-[#E72020] rounded-full"
    //         style={{ width: progress }}
    //         onClick={handleProgressBarClick}
    //       ></div>
    //     </div>
    //     <div>
    //       <img
    //         src={volumnImage}
    //         alt="volumn"
    //         className="w-6 cursor-pointer"
    //         onClick={HandleVolumnHidden}
    //       />
    //       <input
    //         type="range"
    //         min="0"
    //         max="1"
    //         value={volume}
    //         onChange={handleVolume}
    //         step="0.1"
    //         className={`${
    //           hiddenVolumn ? "block" : "hidden"
    //         } transform -rotate-90 origin-left absolute bottom-[14px] ml-3`}
    //       />
    //     </div>
    //     <div>
    //       <img src={cc} alt="cc" className="w-6 cursor-pointer" />
    //     </div>
    //     <div>
    //       <img src={setting} alt="setting" className="w-6 cursor-pointer" />
    //     </div>
    //     <div>
    //       <img
    //         src={reszing}
    //         alt="reszing"
    //         className="w-6 cursor-pointer"
    //         onClick={() => handleFullScreen()}
    //       />
    //     </div>
    //   </div>
    // </div>
    // <div className="w-[98%] max-w-[900px] bg-black overflow-hidden">
      <div 
        className="relative h-fit"
        onMouseOver={() => setHiddenControl(!hiddenControl)}
        onMouseOut={() => setHiddenControl(!hiddenControl)}
      >
        <img src={controlImage} className={`${isPlaying ? 'hidden' : "absolute  " }`} />
      <video
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        id="video"
        ref={videoRef}
        onTimeUpdate={handleTime}
        onClick={handlePlayandPause}
        className="w-full"
        poster={Background}
        />
      <div className="absolute left-0 right-0 bottom-5 z-50 mx-2">
        <ul className="flex items-center justify-around mx-3">
          <li>
          <p className="text-[#ffff] text-smR w-16 xl:font-medium  max-sm:w-20">
          <span className="">{currentMinutes}</span> /{" "}
           <span className="">{duration}</span>
         </p>
          </li>
          <li className="w-[64%] rounded-full h-2 cursor-pointer bg-gray-300">
          {/* <div className=""> */}
          <div
             className="h-2 bg-[#E72020] rounded-full"
             style={{ width: progress }}
             onClick={handleProgressBarClick}
           ></div>
         {/* </div> */}
          </li>
          <li>
            <button type="button">
          <img
            src={volumnImage}
            alt="volumn"
            className="w-5 cursor-pointer"
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
            <button type="button" className="w-5">
              <img src={cc} alt="cc" className="w-6 cursor-pointer" />
            </button>
          </li>
          <li className="h-6">
            <button type="button" className="w-5">
               <img src={setting} alt="setting" className="cursor-pointer" />
            </button>
          </li>
          <li className="h-6">
            <button type="button" className="w-5">
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
    // </div>
  );
};

export default Video;

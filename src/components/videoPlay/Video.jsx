import React, { useState, useRef } from 'react';
import controlImage from './control.png'
import volumnImage from './volume.png'
import cc from './bi_badge-cc-fill.png'
import setting from './Setting.png'
import reszing from './Resizing.png'

const Video = () => {
    const videoRef = useRef(null);
    const [volume, setVolume] = useState(1);
    const [currentMinutes, setCurrentMinutes] = useState('0:00');
    const [duration, setDuration] = useState('0:00');
    const [progress, setProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [hiddenVolumn, setHiddenVolumn] = useState(false);

    const handlePlayandPause = () => {
        const video = videoRef.current;
        if (video.paused) {
            video.play();
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
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

        setCurrentMinutes(`${currentminutes}:${currentseconds.toString().padStart(2, '0')}`);
        setDuration(`${durationminutes}:${durationseconds.toString().padStart(2, '0')}`);
        setProgress((video.currentTime / video.duration) * 100);
    };

    const handleProgressBarClick = (e) => {
        const video = videoRef.current;
        if (!video) return;

        const pos = (e.pageX - (e.target.offsetLeft + e.target.offsetParent.offsetLeft)) / e.target.offsetWidth;
        video.currentTime = pos * video.duration;
    }

    const HandleVolumnHidden = () => {
            setHiddenVolumn(!hiddenVolumn);
    }
    return (
        <div className="w-full h-full">
            <img src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg' className={`${isPlaying ? 'hidden' : "w-full h-[37rem]"}`} onClick={handlePlayandPause} />
            <video
                src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
                className={`${isPlaying ? 'block' : "hidden"} w-full h-[37rem]}`}
                id='video'
                ref={videoRef}
                onTimeUpdate={handleTime}
                onClick={handlePlayandPause}
            >
            </video>
                <img src={controlImage} onClick={handlePlayandPause} className={`w-20 h-[75.88px] bg-white rounded-full z-50 absolute top-[50%] left-1/3 ${isPlaying ? "hidden" : "block"} `} />
            <div className='flex absolute bottom-24 gap-6 md:mx-5 mx-2 w-2/3 items-center'>
                <div className="text-[#ffff]">
                    <span className="w-[81px] h-[27px] font-medium text-base">{currentMinutes}</span> / <span className="w-[81px] h-[27px] font-medium text-base ">{duration}</span>
                </div>
                    <progress max="100" min="0" className="md:w-[65%] h-2 rounded-md bg-[#FFFFF] [&::-moz-progress-bar]:bg-[#E72020] cursor-pointer " onClick={handleProgressBarClick} value={progress}></progress>
                <div>
                    <img src={volumnImage} alt="volumn" className="w-6 cursor-pointer" onClick={HandleVolumnHidden} />
                    <input type="range" min="0" max="1" value={volume} onChange={handleVolume} step="0.1" className={`${hiddenVolumn ? 'block' : 'hidden' } transform -rotate-90 origin-left absolute bottom-[14px] ml-3`} />
                </div>
                <div>
                    <img src={cc} alt="cc" className="w-6 cursor-pointer" />
                </div>
                <div>
                    <img src={setting} alt="setting" className="w-6 cursor-pointer" />
                </div>
                <div>
                    <img src={reszing} alt="reszing" className="w-6 cursor-pointer" />
                </div>
            </div>
        </div>
    )
}

export default Video;

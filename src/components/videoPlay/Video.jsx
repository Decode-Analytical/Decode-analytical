import React, { useState, useRef } from 'react';

const Video = () => {
    const videoRef = useRef(null);
    const [volume, setVolume] = useState(1);
    const [currentMinutes, setCurrentMinutes] = useState('0:00');
    const [duration, setDuration] = useState('0:00');
    const [progress, setProgress] = useState(0);

    const handlePlayandPause = () => {
        const video = videoRef.current;
        if (video.paused) {
            video.play();
        } else {
            video.pause();
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

    return (
        <>
            <video
                src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
                poster='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg'
                className='w-full h-72'
                id='video'
                ref={videoRef}
                onTimeUpdate={handleTime}
            ></video>
            <div>
                <button type='button' onClick={handlePlayandPause} className="bg-black">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
                <div>
                    <span className="text-black">{currentMinutes}</span> / <span className="text-black">{duration}</span>
                </div>
                <input type="range" min="0" max="1" value={volume} onChange={handleVolume} step="0.1" />
            </div>
                <progress max="100" className='mx-2' onClick={handleProgressBarClick} value={progress}></progress>
        </>
    )
}

export default Video;

import React, { useState } from 'react'

const Video = () => {
    const video = document.getElementById('video')
    const [volume, setVolume] = useState("1")
    const handlePlayandPause = () => {
        if (video.paused) {
            video.play()
        } else {
            video.pause()
        }
    }
    const handleVolume = (e) => {
        setVolume(e.target.value)
        video.volume = volume
        console.log(video.volume)
    }
  return (
    <>
    <video 
    src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    poster='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg'
    className='w-full h-72'
    id='video'
    >
    </video>
    <div>
        <button type='button' onClick={handlePlayandPause} className="bg-black">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
        </button>
        <input type="range" min="0" max="1" value={volume} onChange={handleVolume} step="0.1" />
    </div>
    </>
  )
}

export default Video
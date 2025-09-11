import React from 'react'

function Video() {
  return (
    <div className='h-full w-full'>
      <video
            src="https://player.vimeo.com/progressive_redirect/playback/899938964/rendition/1080p/file.mp4?loc=external&log_user=0&signature=6a2cb0320d09d02dcfdfa2ad504c89a510e6d93d55e9060b1b55d680fa2e2be9"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
        />    
    </div>
  )
}

export default Video
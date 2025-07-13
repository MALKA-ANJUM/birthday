import React, { useEffect, useRef } from 'react';

const BackgroundAudio = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    const tryPlay = () => {
      if (audio) {
        audio.currentTime = 33;
        audio.play().catch(err => {
          console.warn("Autoplay failed:", err.message);
        });
      }
    };

    document.addEventListener("DOMContentLoaded", tryPlay);
    window.addEventListener("click", tryPlay); // fallback if browser blocks

    return () => {
      document.removeEventListener("DOMContentLoaded", tryPlay);
      window.removeEventListener("click", tryPlay);
    };
  }, []);

  return (
    <video
      ref={audioRef}
      src="/videoplayback.mp4"
      muted={false}
      loop
      autoPlay
      playsInline
      style={{ display: 'none' }}
    />
  );
};

export default BackgroundAudio;

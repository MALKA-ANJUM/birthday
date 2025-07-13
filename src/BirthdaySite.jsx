import React, { useEffect, useRef } from 'react';
import HeroSection from './components/HeroSection';
import MemoriesSection from './components/MemoriesSection';
import FinalNote from './components/FinalNote';
import music from '/videoplayback.mp4'; // in public/

const BirthdaySite = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = () => {
      audioRef.current.currentTime = 33;
      audioRef.current.play().catch(() => {});
    };
    document.addEventListener('click', playAudio);
    return () => document.removeEventListener('click', playAudio);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const circle = document.createElement('div');
      circle.className = 'ripple';
      circle.style.left = `${e.clientX}px`;
      circle.style.top = `${e.clientY}px`;
      document.body.appendChild(circle);
      setTimeout(() => circle.remove(), 1000);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="birthday-container">
      <video
        ref={audioRef}
        src={music}
        autoPlay
        muted={false}
        loop
        playsInline
        style={{ display: 'none' }}
      />
      <HeroSection />
      <MemoriesSection />
      <FinalNote />
    </div>
  );
};

export default BirthdaySite;

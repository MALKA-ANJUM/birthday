import React from 'react';

const MusicPlayer = () => {
  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: 9999,
      background: 'rgba(255,255,255,0.9)',
      padding: '10px 20px',
      borderRadius: '30px',
      boxShadow: '0 5px 20px rgba(0,0,0,0.2)',
    }}>
      <audio controls autoPlay loop style={{ outline: 'none' }}>
        <source src="/ranjheya.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MusicPlayer;

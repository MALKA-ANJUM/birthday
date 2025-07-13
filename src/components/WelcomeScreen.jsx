import React from 'react';

const WelcomeScreen = ({ onStart }) => {
  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      background: '#000',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', fontFamily: 'Dancing Script' }}>
        🎉 Ready for something special?
      </h1>
      <button
        onClick={onStart}
        style={{
          padding: '15px 30px',
          fontSize: '1.2rem',
          backgroundColor: '#e91e63',
          border: 'none',
          borderRadius: '30px',
          color: 'white',
          cursor: 'pointer',
        }}
      >
        Start Experience
      </button>
    </div>
  );
};

export default WelcomeScreen;

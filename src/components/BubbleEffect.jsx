import React from 'react';
import './BubbleEffect.css';

const BubbleEffect = () => (
  <div className="bubbles">
    {Array.from({ length: 30 }).map((_, i) => (
      <div className="bubble" key={i}></div>
    ))}
  </div>
);

export default BubbleEffect;

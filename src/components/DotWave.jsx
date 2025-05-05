import React from 'react';
import '../style/DotWave.css';

const DotWave = () => {
  const rows = 30;
  const cols = 60;
  const dots = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // Creates a diagonal wave effect starting from top-left to bottom-left
      const delay = (row + col) * 0.05;
      dots.push(
        <div
          key={`${row}-${col}`}
          className="dot"
          style={{ animationDelay: `${delay}s` }}
        ></div>
      );
    }
  }

  return <div className="dot-wave-grid">{dots}</div>;
};

export default DotWave;

import React from 'react';
import './allSet.scss';
import lady from '../../assets/closeUpWoman.png';

const Instructions = () => {
  document.body.style.backgroundColor = '#388CAB';

  return (
    <div id="all-set">
      <div id="image-text-container">
        <img src={lady} alt="lady" id="lady-image" />
        <div id="text">
          <h1>You&apos;re All Set</h1>
          <h2>Look up Boost on the App Store and Download Our App </h2>
        </div>
      </div>

    </div>
  );
};

export default Instructions;

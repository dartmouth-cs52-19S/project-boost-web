import React from 'react';
import './allSet.scss';
import lady from '../../assets/closeUpWoman.png';

const Instructions = () => {
  return (
    <div className="allSetPage">
      <div className="imageAndText">
        <img src={lady} alt="lady" />
        <div className="text">
          <h1>You&apos;re All Set</h1>
          <h2>Look up Boost on the App Store and Download Our App </h2>
        </div>
      </div>

    </div>
  );
};

export default Instructions;

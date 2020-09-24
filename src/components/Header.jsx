import React from 'react';
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa';

function Header({ newColor, isPlaying, handlePause, handleToggle }) {
  return (
    <header className={`header ${newColor}`} id="header" role="banner">
      <div className="wrapper">
        <nav className="navBar">
          <div className="logo">
            <h1>MOODY</h1>
            <div className="palette">
              <div className={`colorOne ${newColor}`}></div>
              <div className={`colorTwo ${newColor}`}></div>
              <div className={`colorThree ${newColor}`}></div>
            </div>
          </div>
          <div className="rightNav">
            <button className="pauseButton" onClick={handlePause}>
              {isPlaying ? <FaPauseCircle /> : <FaPlayCircle />}
            </button>
            <label className="switch">
              <label htmlFor="switchColor" className="sr-only">
                Switch Color Theme
              </label>
              <input
                id="switchColor"
                name="switchColor"
                type="checkbox"
                defaultChecked
                onChange={handleToggle}
              />

              <span className="slider"></span>
            </label>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;

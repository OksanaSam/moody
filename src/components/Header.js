import React from 'react';
import { FaPlayCircle, FaRegPauseCircle, FaPauseCircle } from 'react-icons/fa';

import { GiPauseButton } from 'react-icons/gi';

function Header(props) {
  return (
    <header className={`header ${props.newColor}`} id="header" role="banner">
      <div className="wrapper">
        <nav className="navBar">
          <div className="logo">
            <h1>MOODY</h1>
            <div className="palette">
              <div className={`colorOne ${props.newColor}`}></div>
              <div className={`colorTwo ${props.newColor}`}></div>
              <div className={`colorThree ${props.newColor}`}></div>
            </div>
          </div>
          <button onClick={props.handlePause} style={{ color: 'white', fontSize: '25px' }}>
            <FaPauseCircle />
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
              onChange={props.handleToggle}
            />

            <span className="slider"></span>
          </label>
        </nav>
      </div>
    </header>
  );
}

export default Header;

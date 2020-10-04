import React from 'react';
//----------ICONS--------//
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa';
//----------REDUX--------//
import { connect } from 'react-redux';
import { togglePlaying } from '../actions';
import { toggleColor } from '../actions';

function Header(props) {
  const { newColor, togglePlaying, toggleColor, isPlaying } = props;
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
            <button
              className="pauseButton"
              onClick={togglePlaying}
              aria-label="Play or Pause Audio"
            >
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
                onChange={toggleColor}
              />

              <span className="slider"></span>
            </label>
          </div>
        </nav>
      </div>
    </header>
  );
}

const mapStateToProps = (state) => {
  return {
    isPlaying: state.isPlaying,
  };
};

export default connect(mapStateToProps, { togglePlaying, toggleColor })(Header);

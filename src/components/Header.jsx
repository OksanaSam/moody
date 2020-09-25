import React from 'react';
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa';
import { connect } from 'react-redux';
import { togglePlaying } from '../actions';

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
          <div className="rightNav">
            <button className="pauseButton" onClick={props.togglePlaying}>
              {props.isPlaying ? <FaPauseCircle /> : <FaPlayCircle />}
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
          </div>
        </nav>
      </div>
    </header>
  );
}

const mapStateToProps = (state) => {
  return {
    isPlaying: state.isPlaying,
    otherState: state,
  };
};

export default connect(mapStateToProps, { togglePlaying })(Header);

import React from 'react';
import { connect } from 'react-redux';
import { removeImage } from '../actions';

function CompleteImage(props) {
  const handleClick = () => {
    props.removeImage(props.numBox);
  };

  return (
    <div className="imagePlace imageEmpty">
      <label htmlFor="closeButton" className="sr-only">
        Close the content
      </label>
      <button
        id="closeButton"
        className="closeButton"
        onClick={handleClick}
        aria-label="Close the content"
      >
        <i className="fas fa-times"></i>
      </button>
      <img src={props.url} alt={props.altTag} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    boxList: state.boxList,
  };
};

export default connect(mapStateToProps, { removeImage })(CompleteImage);

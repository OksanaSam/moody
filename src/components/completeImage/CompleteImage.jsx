import React from 'react';
//----------REDUX--------//
import { connect } from 'react-redux';
import { removeImage } from '../../actions';

function CompleteImage(props) {
  const { url, altTag, removeImage, numBox } = props;
  return (
    <div className="imagePlace imageEmpty">
      <label htmlFor="closeButton" className="sr-only">
        Close the content
      </label>
      <button
        id="closeButton"
        className="closeButton"
        onClick={() => removeImage(numBox)}
        aria-label="Close the content"
      >
        <i className="fas fa-times"></i>
      </button>
      <img src={url} alt={altTag} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    boxList: state.boxList,
  };
};

export default connect(mapStateToProps, { removeImage })(CompleteImage);

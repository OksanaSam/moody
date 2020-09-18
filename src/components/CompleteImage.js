import React from 'react';

function CompleteImage(props) {
  const handleClick = () => {
    props.removeImages(props.numBox);
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

export default CompleteImage;

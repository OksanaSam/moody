import React from 'react';

function CompleteQuote(props) {
  const handleClick = () => {
    props.removeQuote();
  };
  return (
    <div className={`imagePlace ${props.newColor}`}>
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
      <p className="randomQuote">{props.quote}</p>
      <p className="quoteAuthor">{props.author}</p>
    </div>
  );
}

export default CompleteQuote;

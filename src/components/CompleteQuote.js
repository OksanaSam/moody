import React from 'react';

function CompleteQuote(props) {
  const handleClick = () => {
    props.removeQuote();
  };
  return (
    <div className={`imagePlace ${props.newColor}`}>
      <button className="closeButton" onClick={handleClick}>
        <i className="fas fa-times"></i>
      </button>
      <p className="randomQuote">{props.quote}</p>
      <p className="quoteAuthor">{props.author}</p>
    </div>
  );
}

export default CompleteQuote;

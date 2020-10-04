import React from 'react';
import { removeQuote } from '../actions';
import { connect } from 'react-redux';

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
      <p className="randomQuote">{props.quoteState.quote}</p>
      <p className="quoteAuthor">{props.quoteState.author}</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    quoteState: state.quoteState,
  };
};

export default connect(mapStateToProps, { removeQuote })(CompleteQuote);

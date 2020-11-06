import React from 'react';
//----------REDUX--------//
import { removeQuote } from '../../actions';
import { connect } from 'react-redux';

function CompleteQuote(props) {
  const { newColor, removeQuote } = props;
  const { quote, author } = props.quoteState;
  return (
    <div className={`imagePlace ${newColor}`}>
      <label htmlFor="closeButton" className="sr-only">
        Close the content
      </label>
      <button
        id="closeButton"
        className="closeButton"
        onClick={removeQuote}
        aria-label="Close the content"
      >
        <i className="fas fa-times"></i>
      </button>
      <p className="randomQuote">{quote}</p>
      <p className="quoteAuthor">{author}</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    quoteState: state.quoteState,
  };
};

export default connect(mapStateToProps, { removeQuote })(CompleteQuote);

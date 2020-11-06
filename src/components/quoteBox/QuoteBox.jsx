import React from 'react';
//----------COMPONENTS--------//
import CompleteQuote from '../completeQuote';
import IncompleteQuote from '../incompleteQuote';
//----------REDUX--------//
import { connect } from 'react-redux';

function QuoteBox(props) {
  const { newColor } = props;

  return (
    <div className="frame">
      <div className="innerFrame">
        {props.quoteState.quote ? (
          <CompleteQuote newColor={newColor} />
        ) : (
          <IncompleteQuote newColor={newColor} />
        )}
        <div className="icons">
          <div className="leftIcons">
            <i className="far fa-heart"></i>
            <i className="far fa-paper-plane"></i>
            <i className="far fa-comment"></i>
          </div>
          <i className="far fa-bookmark"></i>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    quoteState: state.quoteState,
  };
};

export default connect(mapStateToProps, null)(QuoteBox);

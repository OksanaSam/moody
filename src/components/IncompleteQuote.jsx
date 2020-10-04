import React, { Component } from 'react';
//----------REDUX--------//
import { fetchQuote } from '../actions';
import { connect } from 'react-redux';

class IncompleteQuote extends Component {
  constructor() {
    super();
    this.state = {
      showAddButton: true,
    };
  }

  showQuote = () => {
    this.props.fetchQuote();
    this.setState({
      showAddButton: !this.state.showAddButton,
    });
  };

  render() {
    return (
      <div className={`imagePlace ${this.props.newColor}`}>
        {this.state.showAddButton && (
          <label htmlFor="addButton">
            <button
              id="addButton"
              className="addButton"
              onClick={this.showQuote}
              aria-label="Make input field appear"
            >
              <i className="fas fa-plus" />
            </button>
          </label>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    quoteState: state.quoteState,
  };
};

export default connect(mapStateToProps, { fetchQuote })(IncompleteQuote);

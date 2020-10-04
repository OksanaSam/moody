import React, { Component } from 'react';
import { fetchQuote } from '../actions';
import { connect } from 'react-redux';

class IncompleteQuote extends Component {
  constructor() {
    super();
    this.state = {
      showAdd: true,
    };
    this.toggleClass = this.toggleClass.bind(this);
  }

  toggleClass = () => {
    this.props.fetchQuote();
    this.setState({
      showAdd: !this.state.showAdd,
    });
  };

  render() {
    return (
      <div className={`imagePlace ${this.props.newColor}`}>
        {this.state.showAdd && (
          <label htmlFor="addButton">
            <button
              id="addButton"
              className="addButton"
              onClick={this.toggleClass}
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

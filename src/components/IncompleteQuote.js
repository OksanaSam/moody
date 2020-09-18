import React, { Component } from 'react';

class IncompleteQuote extends Component {
  constructor() {
    super();
    this.state = {
      showAdd: true,
    };
    this.toggleClass = this.toggleClass.bind(this);
  }

  toggleClass = () => {
    this.props.getQuote();
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

export default IncompleteQuote;

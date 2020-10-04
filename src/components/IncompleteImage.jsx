import React, { Component } from 'react';
//----------REDUX--------//
import { connect } from 'react-redux';
import { fetchImages } from '../actions';

class IncompleteImage extends Component {
  constructor() {
    super();
    this.state = {
      showInput: false,
      showAdd: true,
      textInput: '',
    };
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (!this.state.textInput) return;
      this.props.fetchImages(this.state.textInput, this.props.numBox);
      this.setState({ textInput: '' });
    }
  };

  toggleClass = () => {
    this.setState({
      ...this.state,
      showInput: !this.state.showInput,
      showAdd: !this.state.showAdd,
    });
  };

  render() {
    const { newColor, numBox } = this.props;
    return (
      <div className={`imagePlace ${newColor}`}>
        {this.state.showInput && (
          <>
            <label for="moodInput" className="sr-only">
              Word describing your mood
            </label>
            <input
              id="moodInput"
              className="moodInput"
              type="text"
              value={this.state.textInput}
              placeholder="Your mood"
              onChange={(e) => this.setState({ textInput: e.target.value })}
              onKeyPress={this.handleKeyPress}
            />
          </>
        )}
        {this.state.showAdd && (
          <label htmlFor={`addButton ${numBox}`}>
            <button
              id={`addButton ${numBox}`}
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
    boxList: state.boxList,
  };
};

export default connect(mapStateToProps, { fetchImages })(IncompleteImage);

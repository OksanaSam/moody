import React, { Component, Fragment } from 'react';


class IncompleteImage extends Component {
    constructor() {
        super();
        this.textInput = React.createRef();
        this.state = {
            showInput: false,
            showAdd: true,
        };

        this.toggleClass= this.toggleClass.bind(this);
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            let moodInput = this.textInput.current.value;
            if (!moodInput) return;
            this.textInput.current.value = '';
            this.props.getImages(moodInput, this.props.numBox);
        }
    };

    toggleClass = () => {
        this.setState({
            showInput: !this.state.showInput,
            showAdd: !this.state.showAdd,
        });
    };

    render() {
        return (
            <div className={`imagePlace ${this.props.newColor}`}>
                {this.state.showInput && (
                    <>
                        <label for="moodInput" className="sr-only">Word describing your mood</label>
                        <input
                            id="moodInput"
                            className="moodInput"
                            type="text"
                            placeholder="Your mood"
                            ref={this.textInput}
                            onKeyPress={this.handleKeyPress}
                        />
                    </>)}
                {/* <p>Incomplete Image</p> */}
                {this.state.showAdd && (
                <button className="addButton" onClick={this.toggleClass}>
                    <i className="fas fa-plus" />
                </button>)}
            </div>
        )
    }
};

export default IncompleteImage;
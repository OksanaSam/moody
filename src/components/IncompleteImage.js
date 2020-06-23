import React, { Component } from 'react';

class IncompleteImage extends Component {
    constructor() {
        super();
        this.textInput = React.createRef();
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            let moodInput = this.textInput.current.value;
            if (!moodInput) return;
            this.textInput.current.value = '';
            this.props.getImages(moodInput, this.props.numBox);
        }
    };

    render() {
        return (
            <div className='incompleteImage'>
                <input
                    type="text"
                    className="moodInput"
                    placeholder="Enter your mood"
                    ref={this.textInput}
                    onKeyPress={this.handleKeyPress}
                />
                <p>Incomplete Image</p>
                <button className="addButton"><i className="fas fa-plus"></i></button>
            </div>
        )
    }
};

export default IncompleteImage;
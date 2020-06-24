import React, { Component } from 'react';

class CompleteQuote extends Component {
    handleClick = () => {
        this.props.removeQuote();
    };

    render() {
        return (
            <div className={`imagePlace ${this.props.newColor}`}>
                <button className="closeButton" onClick={this.handleClick}><i className="fas fa-times"></i></button>
                <p className="randomQuote">{this.props.quote}</p>
                <p className="quoteAuthor">{this.props.author}</p>
            </div>
        )
    }
};

export default CompleteQuote;
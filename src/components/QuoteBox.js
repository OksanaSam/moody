import React, { Component } from 'react';
import CompleteQuote from './CompleteQuote';
import IncompleteQuote from './IncompleteQuote';

class QuoteBox extends Component {

    render() {
        return (
            <div className='frame'>
                <div className='innerFrame'>
                { this.props.quote ? (
                    <CompleteQuote 
                        quote={this.props.quote}
                        author={this.props.author}
                        removeQuote={this.props.removeQuote}
                        newColor={this.props.newColor}
                    />
                ) : <IncompleteQuote
                        getQuote={this.props.getQuote}
                        newColor={this.props.newColor}
                    /> }
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
        )
    }
}

export default QuoteBox;



import React from 'react';
import CompleteQuote from './CompleteQuote';
import IncompleteQuote from './IncompleteQuote';

function QuoteBox(props) {
    return (
        <div className='frame'>
            <div className='innerFrame'>
            { props.quote ? (
                <CompleteQuote 
                    quote={props.quote}
                    author={props.author}
                    removeQuote={props.removeQuote}
                    newColor={props.newColor}
                />
            ) : <IncompleteQuote
                    getQuote={props.getQuote}
                    newColor={props.newColor}
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

export default QuoteBox;
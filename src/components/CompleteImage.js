import React from 'react';

function CompleteImage(props) {
    const handleClick = () => {
        props.removeImages(props.numBox);
    };
    
    return (
        <div className="imagePlace imageEmpty">
            <button className="closeButton" onClick={handleClick}><i className="fas fa-times"></i></button>
            <img src={props.url} alt={props.altTag}/>
        </div>
    );
};

export default CompleteImage;
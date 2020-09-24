import React from 'react';
import CompleteImage from './CompleteImage';
import IncompleteImage from './IncompleteImage';

function PhotoBox(props) {
  return (
    <div className="frame">
      <div className="innerFrame">
        {props.mood || props.url ? (
          <CompleteImage
            mood={props.mood}
            url={props.url}
            altTag={props.altTag}
            numBox={props.numBox}
            removeImages={props.removeImages}
            newColor={props.newColor}
          />
        ) : (
          <IncompleteImage
            getImages={props.getImages}
            numBox={props.numBox}
            newColor={props.newColor}
          />
        )}
        <div className="icons">
          <div className="leftIcons">
            <i className="far fa-heart"></i>
            <i className="far fa-paper-plane"></i>
            <i className="far fa-comment"></i>
          </div>
          <i className="far fa-bookmark"></i>
        </div>
        {props.mood && <p className="moodTitle">{props.mood}</p>}
      </div>
    </div>
  );
}

export default PhotoBox;

import React from 'react';
//----------COMPONENTS--------//
import CompleteImage from './CompleteImage';
import IncompleteImage from './IncompleteImage';
//----------REDUX--------//
import { connect } from 'react-redux';

function PhotoBox(props) {
  const { mood, numBox, url, altTag, newColor } = props;
  return (
    <div className="frame">
      <div className="innerFrame">
        {mood || url ? (
          <CompleteImage
            mood={mood}
            url={url}
            altTag={altTag}
            numBox={numBox}
            newColor={newColor}
          />
        ) : (
          <IncompleteImage numBox={numBox} newColor={newColor} />
        )}
        <div className="icons">
          <div className="leftIcons">
            <i className="far fa-heart"></i>
            <i className="far fa-paper-plane"></i>
            <i className="far fa-comment"></i>
          </div>
          <i className="far fa-bookmark"></i>
        </div>
        {mood && <p className="moodTitle">{mood}</p>}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    boxList: state.boxList,
  };
};

export default connect(mapStateToProps, null)(PhotoBox);

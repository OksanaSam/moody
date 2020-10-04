import React from 'react';
import CompleteImage from './CompleteImage';
import IncompleteImage from './IncompleteImage';
import { connect } from 'react-redux';

function PhotoBox(props) {
  const { mood } = props;
  return (
    <div className="frame">
      <div className="innerFrame">
        {props.mood || props.url ? (
          <CompleteImage
            mood={props.mood}
            url={props.url}
            altTag={props.altTag}
            numBox={props.numBox}
            newColor={props.newColor}
          />
        ) : (
          <IncompleteImage numBox={props.numBox} newColor={props.newColor} />
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

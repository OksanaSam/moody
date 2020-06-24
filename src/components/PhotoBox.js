import React, { Component } from 'react';
import CompleteImage from './CompleteImage';
import IncompleteImage from './IncompleteImage';

class PhotoBox extends Component {
    render() {
        return (
            <div className='frame'>
                <div className='innerFrame'>
                        { this.props.mood || this.props.url ? (
                            <CompleteImage 
                                mood={this.props.mood}
                                url={this.props.url}
                                altTag={this.props.altTag}
                                numBox={this.props.numBox}
                                removeImages={this.props.removeImages}
                                newColor={this.props.newColor}
                            />
                        ) : <IncompleteImage
                                getImages={this.props.getImages}
                                numBox={this.props.numBox}
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
                { this.props.mood && <p className="moodTitle">{this.props.mood}</p> }
                </div>
            </div>
        )
    }
};

export default PhotoBox;
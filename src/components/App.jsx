import React, { Component } from 'react';
//----------COMPONENTS--------//
import Header from './Header';
import PhotoBox from './PhotoBox';
import QuoteBox from './QuoteBox';
import Footer from './Footer';
//----------STYLES--------//
import '../styles/App.css';
//----------LOCAL FILES--------//
import soundfilePink from '../sound/Erik Satie_20170606_128.mp3';
import soundfileBlue from '../sound/seamusic.mp3';
//----------LIBRARIES--------//
import Sound from 'react-sound';
//----------REDUX--------//
import { connect } from 'react-redux';
import { togglePlaying } from '../actions';

class App extends Component {
  getBoxes(toggledColor) {
    const photoBoxes = this.props.boxList.map((box, index) => (
      <PhotoBox
        key={index}
        mood={box.mood}
        url={box.url}
        altTag={box.alt}
        numBox={index}
        newColor={toggledColor}
      />
    ));
    const quoteBox = (
      <QuoteBox
        key={new Date()}
        newColor={this.props.isColorToggled ? 'ToggledClass' : 'NotToggledClass'}
      />
    );
    return [photoBoxes[0], quoteBox, ...photoBoxes.slice(1)];
  }

  render() {
    const { isColorToggled, isPlaying } = this.props;
    const newColor = isColorToggled ? 'ToggledClass' : 'NotToggledClass';
    const boxes = this.getBoxes(newColor);
    const isSoundPlaying = isPlaying ? 'PLAYING' : 'PAUSED';

    return (
      <>
        {isColorToggled ? (
          <Sound
            url={soundfileBlue}
            playStatus={Sound.status[isSoundPlaying]}
            onLoading={this.handleSongLoading}
            onPlaying={this.handleSongPlaying}
            onFinishedPlaying={this.handleSongFinishedPlaying}
          />
        ) : (
          <Sound
            url={soundfilePink}
            playStatus={Sound.status[isSoundPlaying]}
            onLoading={this.handleSongLoading}
            onPlaying={this.handleSongPlaying}
            onFinishedPlaying={this.handleSongFinishedPlaying}
          />
        )}
        <Header newColor={newColor} />
        <main role="main" className={`mainContainer ${newColor}`}>
          <div className="wrapper">
            <div className="mainGrid" id="mainGrid">
              {boxes}
            </div>
          </div>
        </main>
        <Footer newColor={newColor} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isPlaying: state.isPlaying,
    isColorToggled: state.isColorToggled,
    boxList: state.boxList,
  };
};

export default connect(mapStateToProps, { togglePlaying })(App);

import React, { Component } from 'react';
import axios from 'axios';
import initialState from '../initialState';
import Header from './Header';
import PhotoBox from './PhotoBox';
import QuoteBox from './QuoteBox';
import Footer from './Footer';
import '../styles/App.css';
import soundfilePink from '../sound/Erik Satie_20170606_128.mp3';
import soundfileBlue from '../sound/seamusic.mp3';
import Sound from 'react-sound';

class App extends Component {
  constructor() {
    super();
    this.state = {
      //initial state is stored in a separate file
      boxList: initialState,
      quote: '',
      author: '',
      isToggled: false,
      isPlaying: true,
    };
  }

  handleToggle = () => {
    this.setState({
      ...this.state,
      isToggled: !this.state.isToggled,
    });
  };

  getBoxes(toggledColor) {
    const photoBoxes = this.state.boxList.map((box, index) => (
      <PhotoBox
        key={index}
        mood={box.mood}
        url={box.url}
        altTag={box.alt}
        numBox={index}
        getImages={this.getImages}
        removeImages={this.removeImages}
        newColor={toggledColor}
      />
    ));
    const quoteBox = (
      <QuoteBox
        key={new Date()}
        quote={this.state.quote}
        author={this.state.author}
        removeQuote={this.removeQuote}
        getQuote={this.getQuote}
        newColor={this.state.isToggled ? 'ToggledClass' : 'NotToggledClass'}
      />
    );
    return [photoBoxes[0], quoteBox, ...photoBoxes.slice(1)];
  }

  // Getting images from Unsplash API

  key = process.env.REACT_APP_KEY;
  getImages = async (photoMood, numBox) => {
    try {
      let response = await axios({
        url: 'https://api.unsplash.com/photos/random',
        method: 'GET',
        responseType: 'json',
        params: {
          client_id: this.key,
          query: photoMood,
          orientation: 'squarish',
        },
      });
      let url = response.data.urls.regular;
      let altTag = response.data.alt_description;
      const copy = [...this.state.boxList];
      copy[numBox] = {
        url: url,
        mood: photoMood,
        alt: altTag,
      };
      this.setState({
        boxList: copy,
      });
    } catch (error) {
      alert(error);
    }
  };

  removeImages = (numBox) => {
    const copy = [...this.state.boxList];
    copy[numBox] = {
      url: '',
      mood: '',
      alt: '',
    };
    this.setState({
      boxList: copy,
    });
  };

  // Getting a random quote from Api
  getQuote = async () => {
    try {
      let response = await axios({
        url: 'https://type.fit/api/quotes',
        method: 'GET',
        responseType: 'json',
        params: {},
      });
      const filterQuotes = function (text) {
        return text.text.length < 50;
      };
      let filteredData = response.data.filter(filterQuotes);
      let quoteId = Math.floor(Math.random() * filteredData.length);
      let randomQuote = filteredData[quoteId].text;
      let author = filteredData[quoteId].author;
      this.setState({
        quote: randomQuote,
        author: author,
      });
    } catch (error) {
      alert(error);
    }
  };

  // Removing the quote from UI
  removeQuote = () => {
    this.setState({
      quote: '',
      author: '',
    });
  };

  handlePause = () => {
    this.setState({
      ...this.state,
      isPlaying: !this.state.isPlaying,
    });
  };

  render() {
    const newColor = this.state.isToggled ? 'ToggledClass' : 'NotToggledClass';
    const boxes = this.getBoxes(newColor);

    const isPlaying = this.state.isPlaying === true ? 'PLAYING' : 'PAUSED';

    return (
      <>
        {this.state.isToggled ? (
          <Sound
            url={soundfileBlue}
            playStatus={Sound.status[isPlaying]}
            onLoading={this.handleSongLoading}
            onPlaying={this.handleSongPlaying}
            onFinishedPlaying={this.handleSongFinishedPlaying}
          />
        ) : (
          <Sound
            url={soundfilePink}
            playStatus={Sound.status[isPlaying]}
            onLoading={this.handleSongLoading}
            onPlaying={this.handleSongPlaying}
            onFinishedPlaying={this.handleSongFinishedPlaying}
          />
        )}
        <Header
          handlePause={this.handlePause}
          isPlaying={this.state.isPlaying}
          handleToggle={this.handleToggle}
          newColor={newColor}
        />
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

export default App;

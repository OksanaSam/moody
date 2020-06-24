import React, { Component } from 'react';
import axios from 'axios'; 
// import firebase from './firebase';
import initialState from './initialState';
import Header from './components/Header';
import PhotoBox from './components/PhotoBox';
import QuoteBox from './components/QuoteBox';
import Footer from './components/Footer';
// import './font-awesome.min.css';
// import 'font-awesome/css/font-awesome.min.css';
// import 'font-awesome/css/font-awesome.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTumblr, faTwitter } from '@fortawesome/free-brands-svg-icons'
import './App.css';
import sound from './Selena - Bidi Bidi Bom Bom (Official Music Video).mp3';



// import sweet alerts
// import Swal from "sweetalert2";


class App extends Component {
  constructor() {
    super();
    this.textInput = React.createRef();
    this.state = {
      //set initial state for Api data
      boxArray: initialState,
      quote: '',
      author: '',
      isToggled: false,
    };
  }

  handleToggle = () => {
    this.setState({
      isToggled: !this.state.isToggled,  
    })
  };


  // getBoxes() {
  //   return this.state.boxArray.map((box, index) => (
  //     <PhotoBox
  //         key={index}
  //         mood={box.mood}
  //         url={box.url}
  //         altTag={box.alt}
  //         numBox={index}
  //         getImages={this.getImages}
  //         removeImages={this.removeImages}
  //     />
  //   ));
  // };
  

  getBoxes() {
    const photoBoxes = this.state.boxArray.map((box, index) => (
      <PhotoBox
        key={index}
        mood={box.mood}
        url={box.url}
        altTag={box.alt}
        numBox={index}
        getImages={this.getImages}
        removeImages={this.removeImages}
        newColor={this.newColor}
      />
    ));
    const quoteBox = (
      <QuoteBox 
        quote={this.state.quote}
        author={this.state.author}
        removeQuote={this.removeQuote}
        getQuote={this.getQuote}
        newColor={this.newColor}
      />
    );
    return [
      photoBoxes[0],
      quoteBox,
      ...photoBoxes.slice(1),
    ];
  }


 // Getting Images from Unsplash 
  getImages = (photoMood, numBox) => {
    axios({
        url: 'https://api.unsplash.com/photos/random',
        method: 'GET',
        responseType: 'json',
        params: {
            client_id: 'Ro76YKYpmutB58ImuEKT8izDBYKA669WYcjJWz-U6TA',
            query: photoMood,
            // count: 10,
            orientation: 'squarish',
        },
    }).then(({ data }) => {
      let url = data.urls.regular;
      let altTag = data.alt_description;
      const copy = [...this.state.boxArray];
      copy[numBox] = {
        url:  url,
        mood: photoMood,
        alt: altTag
      };

      this.setState({
        boxArray: copy,
      });   
    });
  };

  removeImages = (numBox) => {
    const copy = [...this.state.boxArray];
    copy[numBox] = {
      url:  '',
      mood: '',
      alt: ''
    };
    this.setState({
      boxArray: copy,
    });
  };


 // Getting a random quote from Api
  getQuote = () => {
    axios({
        url: 'https://type.fit/api/quotes',
        method: 'GET',
        responseType: 'json',
        params: {}
    }).then(({ data }) => {
        let quoteId = Math.floor(Math.random() * data.length);
        let randomQuote = data[quoteId].text;
        let author = data[quoteId].author;
        this.setState({
          quote: randomQuote,
          author: author,
        })
    })
  };


  removeQuote = () => {
    this.setState({
      quote: '',
      author: '',
    });
  };

  // getBoxes() {
  //   return this.state.boxArray.map((box, index) => (
  //     <PhotoBox
  //         key={index}
  //         mood={box.mood}
  //         url={box.url}
  //         altTag={box.alt}
  //         numBox={index}
  //         getImages={this.getImages}
  //         removeImages={this.removeImages}
  //     />
  //   ));
  // };
  

  render() {
    let audio = new Audio({sound})
    const start = () => {
      audio.play()
    }
    start();
    const boxes = this.getBoxes();
    const newColor = this.state.isToggled ? 'ToggledClass' : 'NotToggledClass';

    return (
      <div>
        {/* {this.state.isToggled ? 'ToggledClass' : 'NotToggledClass'} */}
        <Header
          handleToggle={this.handleToggle}
          newColor={newColor}
          />
        <div className={`mainContainer ${newColor}`} >
          <div className='wrapper'>
            <div className="mainGrid" id="mainGrid">
              {boxes}
            </div>
            {/* <h1 className={newColor}>ToggledClass</h1> */}
            {/* <button onClick={start}>Play</button> */}
          </div>
        </div>
        <Footer
          newColor={newColor}
        />
      </div>
    )
  };
}

export default App;
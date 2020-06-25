import React, { Component } from 'react';
import axios from 'axios'; 
import firebase from './firebase';
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
// import soundfileBlue from './Selena - Bidi Bidi Bom Bom (Official Music Video).mp3';
// import soundfilePink from './0267 (online-audio-converter.com).mp3';
// import soundfileBlue from './0267.wav';
// import soundfilePink from './0267.wav';
import Sound from 'react-sound';



// import sweet alerts
// import Swal from "sweetalert2";


class App extends Component {
  constructor() {
    super();
    this.textInput = React.createRef();
    this.state = {
      //set initial state for Api data
      boxList: initialState,
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


  // componentDidMount() {
  //   const dbRef = firebase.database().ref();
  //   dbRef.on('value', (response) => {
  //     const newState = [];
  //     const data = response.val();
  //     for (let key in data) {
  //       newState.push(data[key]);
  //     }
  //     this.setState({
  //       boxList: newState
  //     });
  //   });
  // }
 

  // getBoxes() {
  //   return this.state.boxList.map((box, index) => (
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
        quote={this.state.quote}
        author={this.state.author}
        removeQuote={this.removeQuote}
        getQuote={this.getQuote}
        newColor={this.state.isToggled ? 'ToggledClass' : 'NotToggledClass'}
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
            orientation: 'squarish',
        },
    }).then(({ data }) => {
      let url = data.urls.regular;
      let altTag = data.alt_description;
      const copy = [...this.state.boxList];
      copy[numBox] = {
        url:  url,
        mood: photoMood,
        alt: altTag
      };

      this.setState({
        boxList: copy,
      });

      for (let box in this.state.boxList) {
        // console.log(this.state.boxList[box]);
        const dbRef = firebase.database().ref();
        dbRef.push(this.state.boxList[box]);
      }
     
    });
  };

  removeImages = (numBox) => {
    const copy = [...this.state.boxList];
    copy[numBox] = {
      url:  '',
      mood: '',
      alt: ''
    };
    this.setState({
      boxList: copy,
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
        // pushing the quote to firebase 
        const dbRef = firebase.database().ref();
        dbRef.push(this.state.quote);
    })
  };


  removeQuote = () => {
    this.setState({
      quote: '',
      author: '',
    });
  };

  // getBoxes() {
  //   return this.state.boxList.map((box, index) => (
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
  
  
  // start = () => {
  //   console.log("this.audio", this.audio)
  //   this.audio.play();
  // }

  render() {
    // const provider = new firebase.auth.GoogleAuthProvider();
    const newColor = this.state.isToggled ? 'ToggledClass' : 'NotToggledClass';
    const boxes = this.getBoxes(newColor);
    // const soundfile = this.state.isToggled ? soundfileBlue : soundfilePink;
    // console.log('soundfile', soundfile);


    return (
      <div>
        {/* {this.state.isToggled ? (
          <Sound
             url={soundfileBlue}
             playStatus={Sound.status.PLAYING}
             onLoading={this.handleSongLoading}
             onPlaying={this.handleSongPlaying}
             onFinishedPlaying={this.handleSongFinishedPlaying}
           />
        ) : (
          <Sound
            url={soundfilePink}
            playStatus={Sound.status.PLAYING}
            onLoading={this.handleSongLoading}
            onPlaying={this.handleSongPlaying}
            onFinishedPlaying={this.handleSongFinishedPlaying}
          />
        )} */}
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
            {/* <button onClick={this.start}>Play</button> */}
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
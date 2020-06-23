import React, { Component } from 'react';
import axios from 'axios'; 
// import firebase from './firebase';
import initialState from './initialState';
import Header from './components/Header';
import PhotoBox from './components/PhotoBox';
import PhotoFrame from './components/PhotoFrame';
import Footer from './components/Footer';
// import './font-awesome.min.css';
// import 'font-awesome/css/font-awesome.min.css';
// import 'font-awesome/css/font-awesome.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTumblr, faTwitter } from '@fortawesome/free-brands-svg-icons'
import './App.css';


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
    };
  }

  // Getting a Random Quote from Api
  componentDidMount() {
    axios({
      url: 'https://type.fit/api/quotes',
      method: 'GET',
      responseType: 'json',
      params: {}
    }).then(({ data }) => {
      let quoteId = Math.floor(Math.random() * data.length);
      let randomQuote = data[quoteId].text;
      this.setState({
        quote: randomQuote,
      })
    })
  }

  // getBoxes() {
  //   const photoBoxes = this.state.boxArray.map(boxIndex => (
  //     <PhotoBox
  //         mood={this.state.boxArray[boxIndex]}
  //         url={this.state.boxArray[boxIndex]}
  //     />
  //   ));
  //   const quoteBox = (
  //     <PhotoBox
  //         mood=''
  //         // url='something'
  //     />
  //   );
  //   return [
  //     photoBoxes[0],
  //     quoteBox,
  //     ...photoBoxes.slice(1),
  //   ];
  // }


// Toggling Colors
  toggleClass = () => {
    const oldStyle = document.getElementById('test').className;
    const newClassName = oldStyle === 'red' ? 'blue' : 'red'
    document.getElementById('test').className =  newClassName
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

  getBoxes() {
    return this.state.boxArray.map((box, index) => (
      <PhotoBox
          key={index}
          mood={box.mood}
          url={box.url}
          altTag={box.alt}
          numBox={index}
          getImages={this.getImages}
          removeImages={this.removeImages}
      />
    ));
  };

  toggleBox = () => {
    this.setState({
      isBoxVisible: true
    })
  };
  

  render() {
    const boxes = this.getBoxes();
    return (
      <div>
        <Header/>
        <div className="mainGrid" id="test">
          <div className='wrapper'>
          <PhotoFrame/>
          </div>
          {boxes}
        </div>
        <Footer/>
      </div>
    )
  };
}

export default App;
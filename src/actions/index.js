import axios from 'axios';
//----------ACTION TYPES--------//
import {
  PLAYING_TOGGLED,
  COLOR_TOGGLED,
  FETCH_IMAGE,
  IMAGE_ERROR,
  REMOVE_IMAGE,
  FETCH_QUOTE,
  QUOTE_ERROR,
  REMOVE_QUOTE,
} from './types';

export const togglePlaying = () => {
  return {
    type: PLAYING_TOGGLED,
  };
};

export const toggleColor = () => {
  return {
    type: COLOR_TOGGLED,
  };
};

const key = process.env.REACT_APP_KEY;

export const fetchImages = (photoMood, id) => async (dispatch) => {
  try {
    const response = await axios.get('https://api.unsplash.com/photos/random', {
      params: {
        client_id: key,
        query: photoMood,
        orientation: 'squarish',
      },
    });
    dispatch({
      type: FETCH_IMAGE,
      payload: {
        data: response.data,
        mood: photoMood,
        id,
      },
    });
  } catch (e) {
    dispatch({
      type: IMAGE_ERROR,
      payload: console.log(e),
    });
  }
};

export const removeImage = (id) => {
  return {
    type: REMOVE_IMAGE,
    payload: {
      id,
    },
  };
};

export const fetchQuote = () => async (dispatch) => {
  try {
    const response = await axios.get('https://type.fit/api/quotes', { params: {} });
    const filterQuotes = function (text) {
      return text.text.length < 50;
    };
    const filteredData = response.data.filter(filterQuotes);
    const quoteId = Math.floor(Math.random() * filteredData.length);
    const randomQuote = filteredData[quoteId].text;
    const author = filteredData[quoteId].author;
    dispatch({
      type: FETCH_QUOTE,
      payload: {
        quote: randomQuote,
        author: author,
      },
    });
  } catch (e) {
    dispatch({
      type: QUOTE_ERROR,
      payload: console.log(e),
    });
  }
};

export const removeQuote = () => {
  return {
    type: REMOVE_QUOTE,
  };
};

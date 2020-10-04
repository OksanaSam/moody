import axios from 'axios';

// Action creator
export const togglePlaying = () => {
  // Return an action
  return {
    type: 'PLAYING_TOGGLED',
  };
};

export const toggleColor = () => {
  // Return an action
  return {
    type: 'COLOR_TOGGLED',
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
      type: 'FETCH_IMAGES',
      payload: {
        data: response.data,
        mood: photoMood,
        id,
      },
    });
  } catch (e) {
    dispatch({
      type: 'IMAGE_ERROR',
      payload: console.log(e),
    });
  }
};

export const removeImage = (id) => {
  // Return an action
  return {
    type: 'REMOVE_IMAGE',
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
      type: 'FETCH_QUOTE',
      payload: {
        quote: randomQuote,
        author: author,
      },
    });
  } catch (e) {
    dispatch({
      type: 'QUOTE_ERROR',
      payload: console.log(e),
    });
  }
};

export const removeQuote = () => {
  // Return an action
  return {
    type: 'REMOVE_QUOTE',
  };
};

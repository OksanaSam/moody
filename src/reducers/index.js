import { combineReducers } from 'redux';
import initialBoxState from './initialBoxState';
//----------ACTION TYPES--------//
import {
  PLAYING_TOGGLED,
  COLOR_TOGGLED,
  FETCH_IMAGE,
  REMOVE_IMAGE,
  FETCH_QUOTE,
  REMOVE_QUOTE,
} from '../actions/types';

//----------PLAY SOUND REDUCER--------//
const playSoundReducer = (state = true, action) => {
  switch (action.type) {
    case PLAYING_TOGGLED:
      return !state;
    default:
      return state;
  }
};

//----------TOGGLE COLOR REDUCER--------//
const toggleColorReducer = (state = false, action) => {
  switch (action.type) {
    case COLOR_TOGGLED:
      return !state;
    default:
      return state;
  }
};

//----------BOX LIST REDUCER--------//
const boxListReducer = (state = initialBoxState, action) => {
  switch (action.type) {
    case FETCH_IMAGE:
      const { data, mood, id } = action.payload;
      const url = data.urls.regular;
      const altTag = data.alt_description;
      const copy = [...state];
      copy[id] = {
        url: url,
        mood,
        alt: altTag,
      };
      return copy;
    case REMOVE_IMAGE:
      const removeCopy = [...state];
      removeCopy[action.payload.id] = {
        url: '',
        mood: '',
        alt: '',
      };
      return removeCopy;
    default:
      return state;
  }
};

//----------QUOTE REDUCER--------//
const initialQuote = { quote: '', author: '' };

const quoteReducer = (state = initialQuote, action) => {
  switch (action.type) {
    case FETCH_QUOTE:
      return action.payload;
    case REMOVE_QUOTE:
      return initialQuote;
    default:
      return state;
  }
};

//----------COMBINING REDUCERS--------//
export default combineReducers({
  isPlaying: playSoundReducer,
  isColorToggled: toggleColorReducer,
  boxList: boxListReducer,
  quoteState: quoteReducer,
});

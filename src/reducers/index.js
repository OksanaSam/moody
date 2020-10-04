import { combineReducers } from 'redux';
import initialState from '../initialState';

const isPlayingReducer = (state = true, action) => {
  switch (action.type) {
    case 'PLAYING_TOGGLED':
      return !state;
    default:
      return state;
  }
};

const isColorToggledReducer = (state = false, action) => {
  switch (action.type) {
    case 'COLOR_TOGGLED':
      return !state;
    default:
      return state;
  }
};

const boxListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_IMAGES':
      const url = action.payload.data.urls.regular;
      const altTag = action.payload.data.alt_description;
      const copy = [...state];
      copy[action.payload.id] = {
        url: url,
        mood: action.payload.mood,
        alt: altTag,
      };
      return copy;
    case 'REMOVE_IMAGE':
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

const initialQuote = { quote: '', author: '' };

const quoteReducer = (state = initialQuote, action) => {
  switch (action.type) {
    case 'FETCH_QUOTE':
      return action.payload;
    case 'REMOVE_QUOTE':
      return initialQuote;
    default:
      return state;
  }
};

export default combineReducers({
  isPlaying: isPlayingReducer,
  isColorToggled: isColorToggledReducer,
  boxList: boxListReducer,
  quoteState: quoteReducer,
});

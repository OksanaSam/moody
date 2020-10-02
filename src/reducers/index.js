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
    case 'ADD_IMAGES':
      return [
        ...state,
        ...(state[action.payload.id] = {
          url: action.payload.urls.regular,
          mood: action.payload.photoMood,
          alt: action.payload.alt_description,
        }),
      ];
    case 'REMOVE_IMAGES':
      return !state;
    default:
      return state;
  }
};

// let url = response.data.urls.regular;
// let altTag = response.data.alt_description;
// const copy = [
//   ...this.state,
//   ...(this.state[numBox] = {
//     url: action.payload.urls.regular,
//     mood: photoMood,
//     alt: action.payload.alt_description,
//   }),
// ];

// copy[numBox] = {
//   url: action.payload.urls.regular,
//   mood: photoMood,
//   alt: action.payload.alt_description,
// };
// this.setState({
//   boxList: copy,
// });

export default combineReducers({
  isPlaying: isPlayingReducer,
  isColorToggled: isColorToggledReducer,
  boxList: boxListReducer,
});

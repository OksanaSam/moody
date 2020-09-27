import { combineReducers } from 'redux';

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

export default combineReducers({
  isPlaying: isPlayingReducer,
  isColorToggled: isColorToggledReducer,
});

import { combineReducers } from 'redux';

const isPlayingReducer = (state = true, action) => {
  switch (action.type) {
    case 'PLAYING_TOGGLED':
      return !state;
    default:
      return state;
  }
};

export default combineReducers({
  isPlaying: isPlayingReducer,
});

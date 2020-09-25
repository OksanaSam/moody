import { combineReducers } from 'redux';

const isPlayingReducer = (isPlaying = true, action) => {
  if (action.type === 'PLAYING_TOGGLED') {
    return !isPlaying;
  }

  return isPlaying;
};

export default combineReducers({
  isPlaying: isPlayingReducer,
});

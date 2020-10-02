import unsplash from '../apis/unsplash';

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
  const response = await unsplash.get(`/users/${id}`, {
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
};

// getImages = async (photoMood, numBox) => {
//   try {
//     let response = await axios({
//       url: 'https://api.unsplash.com/photos/random',
//       method: 'GET',
//       responseType: 'json',
//       params: {
//         client_id: this.key,
//         query: photoMood,
//         orientation: 'squarish',
//       },

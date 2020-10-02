import axios from 'axios';

export default axios.create({
  url: 'https://api.unsplash.com/photos/random',
});

import axios from 'axios';

// const KEY = 'AIzaSyBXAyimeyDQaq0xckMpjEG4NzYGJR_XTbg';
const KEY = 'AIzaSyCMIJeKt7LjFK3Zk8jA3rxXI76yUxlo2f8';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});

import axios from 'axios';

const instance = axios.create({
  headers: {
    Authorization: '',
  },
});

export default instance;

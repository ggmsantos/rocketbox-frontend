import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rocketseatbox-backend.herokuapp.com/'
});

export default api;
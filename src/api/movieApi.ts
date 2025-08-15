import axios from 'axios';

const PRIVATE_MOVIE_API = import.meta.env.VITE_PRIVATE_MOVIE_API;
const TOKEN = localStorage.getItem('token');

const movieApi = axios.create({
  baseURL: PRIVATE_MOVIE_API,
});

movieApi.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers['Authorization'] = `Bearer ${TOKEN}`;
  }

  return config;
});

export default movieApi;

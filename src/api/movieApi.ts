import axios from 'axios';
import { store } from '../store';

const PRIVATE_MOVIE_API = import.meta.env.VITE_PRIVATE_MOVIE_API;

const movieApi = axios.create({
  baseURL: PRIVATE_MOVIE_API,
});

movieApi.interceptors.request.use((config) => {
  const state = store.getState();
  const token = state.auth.user.token;

  if (config.headers) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  return config;
});

export default movieApi;

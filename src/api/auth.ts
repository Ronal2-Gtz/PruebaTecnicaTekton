import axios from 'axios';

const PUBLIC_AUTH_API = import.meta.env.VITE_PUBLIC_AUTH_API;

const authApi = axios.create({ baseURL: PUBLIC_AUTH_API });

export default authApi;

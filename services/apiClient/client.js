import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.BACKEND_URI,
  withCredentials: true,
});

export default apiClient;

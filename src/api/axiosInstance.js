import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.eventaura.tech/',
});

// Optional: Add interceptors (if needed)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default axiosInstance;

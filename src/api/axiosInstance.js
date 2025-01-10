import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://35.207.208.130:8080',
});

// Optional: Add interceptors (if needed)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default axiosInstance;

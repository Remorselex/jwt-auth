import axios, { AxiosInstance } from 'axios';

export const API_URL = 'http://localhost:5001/api';


const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;




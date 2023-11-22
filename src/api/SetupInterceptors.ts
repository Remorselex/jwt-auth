import { Store } from '@reduxjs/toolkit';
import axiosInstance from './AxiosClient';
import { refreshToken } from '../store/authSlice/authSlice';


const setupInterceptors = (store: Store) => {
  const { dispatch } = store;
  axiosInstance.interceptors.request.use(
    (config) => {
      const { app } = store.getState();
      const token = app?.tokens?.access_token;

      if (token) {
        config.headers.use(
          config.headers.Authorization = `Bearer ${token}`
        )
      }

      return config;
    },
    (error) => Promise.reject(error)
  );

  axiosInstance.interceptors.response.use(
    (res) => {
      return res;
    },
    async (error) => {
      const originalRequest = error.config;

      if (error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        dispatch<any>(refreshToken());
      }


      return Promise.reject(error);
    }
  );
};

export default setupInterceptors;

import { Store } from '@reduxjs/toolkit';
import axiosInstance from './AxiosClient';

const setupInterceptors = (store: Store) => {

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


      return Promise.reject(error);
    }
  );
};

export default setupInterceptors;

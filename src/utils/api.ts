import axios, { InternalAxiosRequestConfig } from 'axios';

import { getAccessToken } from './cookies';

const BASEURL = 'https://api.realworld.io/api';

export const apiCaller = axios.create({
  baseURL: BASEURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const assignTokenToHeader = (
  config: InternalAxiosRequestConfig<any>,
  accessToken: string,
) => {
  if (config.headers && accessToken) {
    config.headers.Authorization = `Token ${accessToken}`;
  }
  return config;
};

apiCaller.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) => {
    const accessToken = getAccessToken();
    return assignTokenToHeader(config, accessToken);
  },
  error => {
    return Promise.reject(error);
  },
);

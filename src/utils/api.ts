import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { getAccessToken } from './cookies';

const BASEURL = 'https://api.realworld.io/api';

export const apiCaller: AxiosInstance = axios.create({
  baseURL: BASEURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const assignTokenToHeader = (
  config: AxiosRequestConfig,
  accessToken: string,
) => {
  if (config.headers && accessToken) {
    config.headers.Authorization = `Token ${accessToken}`;
  }

  return config;
};

apiCaller.interceptors.request.use(config => {
  const accessToken = getAccessToken();
  return assignTokenToHeader(config, accessToken);
});

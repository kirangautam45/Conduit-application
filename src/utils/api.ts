import axios from 'axios';

const BASEURL = 'https://api.realworld.io/api';

export const apiCaller = axios.create({
  baseURL: BASEURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiCaller.interceptors.request.use(config => {
  return config;
});

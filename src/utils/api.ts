import axios from 'axios';
// import { store } from '../store';
const webToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImluIG5vc3RydWQgbnVsbGEgVXQiLCJ1c2VybmFtZSI6InNpbnQiLCJpYXQiOjE2ODA2MDgwNjksImV4cCI6MTY4NTc5MjA2OX0.ooeA4K51in_-CGpdXNd7-abBI21gvzvp3Bvg1Ygss6Y';

const BASEURL = 'https://api.realworld.io/api';

export const apiCaller = axios.create({
  baseURL: BASEURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// const webToken = 'web token'
// export const assignTokenToHeader = (
//   config: AxiosRequestConfig,
//   accessToken: string,
// ) => {
//   if (config.headers && accessToken) {
//     config.headers.Authorization = `Token ${accessToken}`;
//   }

//   return config;
// };

apiCaller.interceptors.request.use(config => {
  if (webToken) {
    config.headers.Authorization = `Token ${webToken}`;
  }
  return config;
});

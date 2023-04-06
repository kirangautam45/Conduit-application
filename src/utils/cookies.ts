import { access } from 'fs';
import Cookies from 'js-cookie';

export const ACCESS_TOKEN = 'accessToken';
export const setCookies = (key: string, value: string) => {
  Cookies.set(key, value);
};

export const setTokens = (accessToken: string) => {
  setCookies(ACCESS_TOKEN, accessToken);
};

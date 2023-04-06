import Cookies from 'js-cookie';

export const ACCESS_TOKEN = 'accessToken';

export const setCookies = (key: string, value: string) => {
  Cookies.set(key, value);
};

export const setTokens = (accessToken: string) => {
  setCookies(ACCESS_TOKEN, accessToken);
};

export const getAccessToken = () => {
  return Cookies.get(ACCESS_TOKEN) || '';
};

export const clearTokens = () => {
  Cookies.remove(ACCESS_TOKEN);
};

export const setAccessToken = (accessToken: string) => {
  setCookies(ACCESS_TOKEN, accessToken);
};

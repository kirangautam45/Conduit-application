import { apiCaller } from '../utils/api';

type user = {
  username?: string;
  email: string;
  password: string;
  token: string;
  bio: string | null;
  image: string;
};

// New user register
export const postUser = (payload: user) => {
  const finalPayload = new FormData();
  finalPayload.append('username', payload?.username || '');
  finalPayload.append('email', payload.email);
  finalPayload.append('password', payload.password);

  return apiCaller.post('/users', finalPayload);
};

//User Login
export const userLogin = (payload: user) => {
  const finalPayload = new FormData();
  finalPayload.append('email', payload.email);
  finalPayload.append('password', payload.password);

  return apiCaller.post('/users/login', finalPayload);
};

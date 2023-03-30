import { userRegister } from '../store/user/type';
import { apiCaller } from '../utils/api';

export const postUser = (payload: userRegister) =>
  apiCaller.post('/users', payload);

export const userLogin = (payload: { email: string; password: string }) =>
  apiCaller.post('users/login', payload);

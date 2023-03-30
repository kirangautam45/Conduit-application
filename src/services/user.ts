import { apiCaller } from '../utils/api';
import { userLogin } from '../store/login/type';
import { userRegister } from '../store/register/type';

export const postUser = (payload: userRegister) =>
  apiCaller.post('/users', payload);

export const postUserLogin = (payload: userLogin) =>
  apiCaller.post('users/login', payload);

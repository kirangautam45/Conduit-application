import { userResponse } from '../login/type';

export type userRegister = {
  user: {
    username: string;
    email: string;
    password: string;
  };
};

export type RegisterUserState = {
  user: userRegister;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  responseRegister?: userResponse;
  message: string;
};

export type userRegister = {
  username: string;
  email: string;
  password: string;
};

export type RegisterUserState = {
  user: userRegister;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string;
};

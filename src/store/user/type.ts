export type userRegister = {
  user: {
    username: string;
    email: string;
    password: string;
  };
};

export type userResponse = {
  email: string;
  token: string;
  username: string;
  bio: string;
  image: string;
};
export type RegisterUserState = {
  user: userRegister;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  response: userResponse;
  message: string;
};

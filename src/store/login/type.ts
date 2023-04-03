export type userLogin = {
  user: {
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

export type LoginUserState = {
  user: userLogin;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  responseLogin?: userResponse;
  message: string;
};

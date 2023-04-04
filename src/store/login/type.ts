export type userLogin = {
  user: {
    email: string;
    password: string;
  };
};

export type userResponseLogin = {
  user: {
    email: string;
    token: string;
    username: string;
    bio: string | null;
    image: string;
  };
};

export type LoginUserState = {
  user: userLogin;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  responseLogin: userResponseLogin | null;
  message: string;
};

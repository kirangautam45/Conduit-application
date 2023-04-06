export type userRegister = {
  user: {
    username: string;
    email: string;
    password: string;
  };
};
export type userResponse = {
  user: {
    email: string;
    username: string;
    bio: string | null;
    image: string;
    token: string;
  };
};

export type RegisterUserState = {
  user: userRegister;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  responseRegister: userResponse;
  message: string;
  token: string;
};

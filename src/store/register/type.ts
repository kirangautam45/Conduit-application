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
    token: string;
    username: string;
    bio: string | null;
    image: string;
  };
};

export type RegisterUserState = {
  user: userRegister;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  responseRegister: userResponse | null;
  message: string;
};

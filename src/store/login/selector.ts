import { RootState } from '../index';

export const loginUserSelector = (state: RootState) => {
  const { user, isError, isLoading, isSuccess, responseLogin } =
    state.loginUser;

  return {
    user,
    isError,
    isLoading,
    isSuccess,
    responseLogin,
  };
};

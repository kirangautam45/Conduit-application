import { RootState } from '../index';

export const loginUserSelector = (state: RootState) => {
  const { user, isError, isLoading, isSuccess } = state.loginUser;

  return {
    user,
    isError,
    isLoading,
    isSuccess,
  };
};

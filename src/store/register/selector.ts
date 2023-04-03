import { RootState } from '../index';

export const registerUserSelector = (state: RootState) => {
  const { user, isError, isLoading, isSuccess, responseRegister } =
    state.registerUser;

  return {
    responseRegister,
    user,
    isError,
    isLoading,
    isSuccess,
  };
};

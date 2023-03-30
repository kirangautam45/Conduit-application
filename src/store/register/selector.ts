import { RootState } from '../index';

export const registerUserSelector = (state: RootState) => {

    const { user, isError, isLoading, isSuccess } = state.registerUser;
    
  return {
    user,
    isError,
    isLoading,
    isSuccess,
  };
};

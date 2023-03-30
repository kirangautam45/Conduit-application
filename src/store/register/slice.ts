import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { postUser } from '../../services/user';

import { RegisterUserState, userRegister, userResponse } from './type';

//post user register

export const registerUser = createAsyncThunk(
  'user/register',
  async (
    { email, username, password }: userRegister['user'],
    { rejectWithValue },
  ) => {
    try {
      const response = await postUser({ user: { email, password, username } });
      console.log(response, 'user/register');
      //return response;
    } catch (error) {
      return rejectWithValue({
        error: {
          status: error?.data?.details,
          data: error?.status,
        },
      });
    }
  },
);

const initialState: RegisterUserState = {
  user: {} as userRegister,
  isLoading: false,
  isSuccess: false,
  isError: false,
  response: {} as userResponse,
  message: '',
};

export const registerUserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setRegister: (state, action) => {
      state.isSuccess = true;
      state.response = action.payload;
    },
  },
  extraReducers: build => {
    build
      .addCase(registerUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.response = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        if (typeof action.payload === 'string') {
          state.message = action.payload;
        }
      });
  },
});

export const { setRegister } = registerUserSlice.actions;

export default registerUserSlice.reducer;

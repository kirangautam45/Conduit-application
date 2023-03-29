import { createAsyncThunk } from '@reduxjs/toolkit';
import { postUser, userLogin } from '../../services/user';
import { createSlice } from '@reduxjs/toolkit';

import { RegisterUserState, userRegister } from './type';
//post user register

export const RegisterUser = createAsyncThunk(
  'user/register',
  async (
    values: {
      email: string;
      token: string;
      username: string;
      bio: null;
      image: string;
      password: string;
    },
    { rejectWithValue },
  ) => {
    try {
      const response = await postUser(values);
      return response.data;
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

export const LoginUser = createAsyncThunk(
  'user/register',
  async (
    values: {
      email: string;
      token: string;
      username: string;
      bio: string;
      image: string;
      password: string;
    },
    { rejectWithValue },
  ) => {
    try {
      const response = await userLogin(values);
      return response.data;
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
  message: '',
};

export const registerUser = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: build => {
    build
      .addCase(RegisterUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(RegisterUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = payload;
      })
      .addCase(RegisterUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        if (typeof action.payload === 'string') {
          state.message = action.payload;
        }
      });
  },
});

import { createAsyncThunk } from '@reduxjs/toolkit';
import { postUser, userLogin } from '../../services/user';
import { createSlice } from '@reduxjs/toolkit';

import { RegisterUserState, userRegister, userResponse } from './type';
//post user register

export const registerUser = createAsyncThunk(
  'user/register',
  async (
    { email, username, password }: userRegister['user'],
    { rejectWithValue },
  ) => {
    try {
      const response = await postUser({ user:{email, password, username }});
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

export const LoginUser = createAsyncThunk(
  'user/register',
  async (
    values: {
      email: string;
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
  response: {} as userResponse,
  message: '',
};

export const registerUserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: build => {
    build
      .addCase(registerUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        console.log(payload, 'payload');
        state.response = payload;
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

export default registerUserSlice.reducer;

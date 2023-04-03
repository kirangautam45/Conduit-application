import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { postUserLogin } from '../../services/user';

import { LoginUserState, userLogin, userResponse } from './type';

//post user Login
export const loginUser = createAsyncThunk(
  'user/register',
  async ({ email, password }: userLogin['user'], { rejectWithValue }) => {
    try {
      const response = await postUserLogin({ user: { email, password } });
      return response.data;
    } catch (error) {
      return rejectWithValue({
        error: {
          status: error,
        },
      });
    }
  },
);
const initialState: LoginUserState = {
  user: {} as userLogin,
  isLoading: false,
  isSuccess: false,
  isError: false,
  responseLogin: {} as userResponse,
  message: '',
};

export const loginUserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // setLogin: (state, action) => {
    //   state.isSuccess = true;
    //   state.response = action.payload;
    // },
  },
  extraReducers: build => {
    build
      .addCase(loginUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.responseLogin = payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        if (typeof action.payload === 'string') {
          state.message = action.payload;
        }
      });
  },
});

// export const { setLogin } = loginUserSlice.actions;

export default loginUserSlice.reducer;

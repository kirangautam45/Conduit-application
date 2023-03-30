import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTagsApi } from '../../services/deafultTags';
import { DefaultTagsState } from './type';
import { createSlice } from '@reduxjs/toolkit';

export const getDefaultTags = createAsyncThunk('defaultTags/tags', async () => {
  const response = await fetchTagsApi();
  return response.data.tags;
});

const initialState: DefaultTagsState = {
  tags: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
};

export const defaultTagsSlice = createSlice({
  name: 'defaultTags',
  initialState,
  reducers: {},
  extraReducers: build => {
    build
      .addCase(getDefaultTags.pending, state => {
        state.isLoading = true;
      })
      .addCase(getDefaultTags.fulfilled, (state, { payload }) => {
        state.isError = false;
        state.isSuccess = true;
        state.tags = payload;
      })
      .addCase(getDefaultTags.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});
export default defaultTagsSlice.reducer;

import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTagsApi } from '../../services/deafultTags';
import { DefaultTagsState } from './type';
import { createSlice } from '@reduxjs/toolkit';

export const getDefaultTags = createAsyncThunk('defaultTags', async () => {
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
  name: 'default Tags',
  initialState,
  reducers: {
    getDefaultTag: (state, action) => {
      state.tags = action.payload;
    },
  },
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
export const { getDefaultTag } = defaultTagsSlice.actions;
export default defaultTagsSlice.reducer;

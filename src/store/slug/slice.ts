import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchArticlesSlugApi } from '../../services/articles';
import { ArticleSlug, ArticleSlugState } from './type';

//get slug articles
export const fetchArticlesBySlug = createAsyncThunk(
  'articles/fetchArticlesBySlug',
  async ({ slug }: { slug: string }) => {
    const response = await fetchArticlesSlugApi(slug);
    return response.data;
  },
);



const initialState: ArticleSlugState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  articleSlug: {} as ArticleSlug,
};
export const articleSlugSlice = createSlice({
  name: 'articleSlug',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(fetchArticlesBySlug.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchArticlesBySlug.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.articleSlug = payload.article;
      })
      .addCase(fetchArticlesBySlug.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default articleSlugSlice.reducer;

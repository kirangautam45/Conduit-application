import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ArticleState } from './type';
import { fetchArticleApi, fetchArticlesSlugApi } from '../../services/articles';

// get all articles
export const getArticle = createAsyncThunk(
  'articles/fetchAllArticles',
  async ({ limit, offset }: { limit: number; offset: number }) => {
    const response = await fetchArticleApi(limit, offset);
    console.log(response.data);
    return response.data;
  },
);

//get slug articles

export const fetchArticlesBySlug = createAsyncThunk(
  'articles/fetchArticlesBySlug',
  async (slug: string) => {
    const response = await fetchArticlesSlugApi(slug);
    return response.data;
  },
);

const initialState: ArticleState = {
  articles: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  articlesCount: 0,
  limit: 10,
  offset: 0,
};

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    getArticles: (state, action) => {
      state.articles = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getArticle.pending, state => {
        state.isLoading = true;
      })
      .addCase(getArticle.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.articles = payload.articles;
        state.limit = payload.limit;
        state.offset = payload.offset;
        state.articlesCount = payload.articlesCount;
      })
      .addCase(getArticle.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(fetchArticlesBySlug.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchArticlesBySlug.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.articles = payload.articles;
      })
      .addCase(fetchArticlesBySlug.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});
export const { getArticles } = articleSlice.actions;
export default articleSlice.reducer;

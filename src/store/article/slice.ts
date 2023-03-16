import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ArticleState } from "./type";
import { fetchArticleApi } from "../../services/articles";

//get articles
export const getArticle = createAsyncThunk("articles/allArticles", async () => {
  const response = await fetchArticleApi();
  return response.data.articles;
});

const initialState: ArticleState = {
  articles: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
};

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    getArticles: (state, action) => {
      state.articles = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getArticle.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getArticle.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.articles = payload;
      })
      .addCase(getArticle.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});
export const { getArticles } = articleSlice.actions;
export default articleSlice.reducer;

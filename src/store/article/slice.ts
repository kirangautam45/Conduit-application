import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ArticleState } from "./type";
import { fetchArticleApi } from "../../services/articles";
const initialState: ArticleState = {
  articleList: {
    title: "",
    description: "",
    body: "",
    createdAt: "",
    favoriteCount: 0,
    slug: "",
    author: {
      username: "",
      bio: "",
      image: "",
    },
    tagList: [],
  },
  isError: false,
  isSuccess: false,
  isLoading: false,
};

//get articles
export const getArticle = createAsyncThunk("articles/allArticles", async () => {
  const response = await fetchArticleApi();
  console.log("response", response.data);
  return response.data;
});

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getArticle.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getArticle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.articleList = { ...state.articleList, ...action.payload };
        console.log(state.articleList, "state");
      })
      .addCase(getArticle.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});
export const { reset } = articleSlice.actions;
export default articleSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const API_KEY = 'z6CjzmCZAG5hI3ZzxLyljMYvBm1gdduD3b7avEy1';
export const loadCurrentArticle = createAsyncThunk(
  'currentArticle/loadCurrentArticle',
  async (articleId) => {
    const data = await fetch(
      `https://api.thenewsapi.com/v1/news/uuid/${articleId}?api_token=${API_KEY}`
    );
    const json = await data.json();
    console.log(json);
    return json;
  }
);

export const currentArticleSlice = createSlice({
  name: 'currentArticle',
  initialState: {
    article: {},
    isLoadingCurrentArticle: false,
    hasError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCurrentArticle.pending, (state) => {
        state.isLoadingCurrentArticle = true;
        state.hasError = false;
      })
      .addCase(loadCurrentArticle.fulfilled, (state, action) => {
        state.isLoadingCurrentArticle = false;
        state.hasError = false;
        state.article = action.payload;
      })
      .addCase(loadCurrentArticle.rejected, (state) => {
        state.isLoadingCurrentArticle = false;
        state.hasError = true;
        state.article = {};
      });
  },
});

export const selectCurrentArticle = (state) => state.currentArticle?.article;

export const isLoadingCurrentArticle = (state) =>
  state.currentArticle.isLoadingCurrentArticle;

export default currentArticleSlice.reducer;

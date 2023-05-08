import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const API_KEY = 'z6CjzmCZAG5hI3ZzxLyljMYvBm1gdduD3b7avEy1';

export const loadAllPreviews = createAsyncThunk(
  'articlePreviews/loadAllPreviews',
  async () => {
    const response = await fetch(
      ` https://api.thenewsapi.com/v1/news/top?api_token=${API_KEY}&locale=us&limit=3`
    );
    const { data } = await response.json();
    console.log(data);
    return data;
  }
);

export const articlePreviewsSlice = createSlice({
  name: 'articlePreviews',
  initialState: {
    articles: [],
    isLoadingArticlePreviews: false,
    hasError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadAllPreviews.pending, (state) => {
        state.isLoadingArticlePreviews = true;
        state.hasError = false;
      })
      .addCase(loadAllPreviews.fulfilled, (state, action) => {
        state.isLoadingArticlePreviews = false;
        state.articles = [...state.articles, ...action.payload];
      })
      .addCase(loadAllPreviews.rejected, (state, action) => {
        state.isLoadingArticlePreviews = false;
        state.hasError = true;
        state.articles = [];
      });
  },
});

export const selectAllPreviews = (state) => state.articlePreviews.articles;

export const isLoading = (state) => state.articlePreviews.isLoading;

export default articlePreviewsSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const API_KEY = 'dca716f4e5384d489a110bf3b374980c';

export const loadAllPreviews = createAsyncThunk(
  'articlePreviews/loadAllPreviews',
  async () => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
    );
    const data = await response.json();
    console.log(data.articles);
    return data.articles;
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
        state.articles = action.payload;
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

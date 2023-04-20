import { configureStore } from '@reduxjs/toolkit';
import articlePreviewsReducer from '../features/articlePreviews/articlePreviewsSlice';

export default configureStore({
  reducer: {
    articlePreviews: articlePreviewsReducer,
  },
});

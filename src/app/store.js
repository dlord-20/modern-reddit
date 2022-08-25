import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import categoryFilterReducer from '../features/categoryFilter/categoryFilterSlice';
import dateRangeFilterReducer from '../features/dateRangeFilter/dateRangeFilterSlice';
import dateRangeVisibiltyReducer from '../features/dateRangeFilter/dateRangeVisibilitySlice';
import redditAPIReducer from '../features/redditAPI/redditAPISlice';
import searchReducer from '../features/search/searchSlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    category: categoryFilterReducer,
    dateRange: dateRangeFilterReducer,
    dateRangeVisibility: dateRangeVisibiltyReducer,
    redditAPI: redditAPIReducer,
    search: searchReducer
  },
});

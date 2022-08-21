import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import categoryFilterReducer from '../features/categoryFilter/categoryFilterSlice';
import dateRangeFilterReducer from '../features/dateRangeFilter/dateRangeFilterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    category: categoryFilterReducer,
    dateRange: dateRangeFilterReducer
  },
});

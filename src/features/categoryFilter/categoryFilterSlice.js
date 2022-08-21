import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'Trending'
};

export const categoryFilterSlice = createSlice({
  name: 'categoryFilter',
  initialState: initialState,
  reducers: {
    changeCategory: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { changeCategory } = categoryFilterSlice.actions;

export const selectCategoryFilter = (state) => state.categoryFilter;

export default categoryFilterSlice.reducer;

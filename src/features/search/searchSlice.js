import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: ''
};

export const searchSlice = createSlice({
  name: 'search',
  initialState: initialState,
  reducers: {
    changeSearchValue: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { changeSearchValue } = searchSlice.actions;

export const selectSearchValue = (state) => state.seach;

export default searchSlice.reducer;
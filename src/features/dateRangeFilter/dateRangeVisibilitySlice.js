import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: false
}

export const dateRangeVisibilitySlice = createSlice({
    name: 'dateRangeVisibilty',
    initialState: initialState,
    reducers: {
        changeVisibility: (state, action) => {
            state.value = action.payload
        }
    }
});

export const { changeVisibility } = dateRangeVisibilitySlice.actions;

export const selectDateRangeVisibility = (state) => state.dateRangeVisibility;

export default dateRangeVisibilitySlice.reducer;

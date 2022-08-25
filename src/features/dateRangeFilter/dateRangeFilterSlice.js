import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 'today'
}

export const dateRangeFilterSlice = createSlice({
    name: 'dateRangeFilter',
    initialState: initialState,
    reducers: {
        changeDateRange: (state, action) => {
            state.value = action.payload
        }
    }
});

export const { changeDateRange, changeVisibility } = dateRangeFilterSlice.actions;

export const selectDateRangeFilter = (state) => state.dateRangeFilter;

export default dateRangeFilterSlice.reducer;

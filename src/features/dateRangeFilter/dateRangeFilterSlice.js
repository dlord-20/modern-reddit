import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: '24 Hours'
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

export const { changeDateRange } = dateRangeFilterSlice.actions;

export const selectDateRangeFilter = (state) => state.dateRangeFilter;

export default dateRangeFilterSlice.reducer;

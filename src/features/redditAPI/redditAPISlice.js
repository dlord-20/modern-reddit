import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { selectCategoryFilter } from "../categoryFilter/categoryFilterSlice";
import { selectDateRangeFilter } from "../dateRangeFilter/dateRangeFilterSlice";

const category = useSelector(selectCategoryFilter);
const dateRange = useSelector(selectDateRangeFilter);

const initialState = {
    category: category,
    dateRange: dateRange,
    isLoading: false,
    isRejected: false
}

export const getRedditFeed = createAsyncThunk(
    'redditAPI/getFeed',
    async (category) => {
        const response = await fetchRedditFeed(category);
        return response.data;
    }
)

export const redditAPISlice = createSlice({
    name: 'redditAPI',
    initialState: initialState,
    reducers: {
        changeCategory: (state, action) => {

        },
        changeDateRange: (state, action) => {

        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getRedditFeed.pending, (state) => {

            })
            .addCase(getRedditFeed.fulfilled, (state) => {

            })
            .addCase(getRedditFeed.rejected, (state) => {

            })
    }
})

export const { changeCategory, changeDateRange } = redditAPISlice.actions;

export const selectRedditAPI = (state) => state.redditAPI;

export default redditAPISlice.reducer;
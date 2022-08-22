import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { selectCategoryFilter } from "../categoryFilter/categoryFilterSlice";
import { selectDateRangeFilter } from "../dateRangeFilter/dateRangeFilterSlice";

// const category = useSelector(selectCategoryFilter);
// const dateRange = useSelector(selectDateRangeFilter);

const initialState = {
    isLoading: false,
    isRejected: false,
    redditFeed: {}
}

export const getRedditFeed = createAsyncThunk(
    'redditAPI/getFeed',
    async () => {
        let url = 'https://www.reddit.com/.json?limit=5';
        let settings = { method: "Get"};
        let redditData = ""
        await fetch(url, settings)
            .then(res => res.json())
            .then(data => {
                redditData = [
            {
            title: data.data.children[0].data.title,
            url: data.data.children[0].data.url_overriden_by_dest
            }
            ];
        });
        return redditData;
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
                state.isLoading = true;
                state.isRejected = false;
            })
            .addCase(getRedditFeed.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isRejected = false;
                
                state.redditFeed = action.payload;
            })
            .addCase(getRedditFeed.rejected, (state) => {
                state.isLoading = false;
                state.isRejected = true;
            })
    }
})

export const { changeCategory, changeDateRange } = redditAPISlice.actions;

export const selectRedditAPI = (state) => state.redditAPI;

export default redditAPISlice.reducer;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { selectCategoryFilter } from "../categoryFilter/categoryFilterSlice";
import { selectDateRangeFilter } from "../dateRangeFilter/dateRangeFilterSlice";

// const category = useSelector(selectCategoryFilter);
// const dateRange = useSelector(selectDateRangeFilter);

//Need to get category and dateRange from the store


const initialState = {
    isLoading: false,
    isRejected: false,
    redditFeed: {}
}

//Make the url customized according to filters and customize the limit based on scroll or clicking to add more
export const getRedditFeed = createAsyncThunk(
    'redditAPI/getFeed',
    async (category = 'new', dateRange, limit = 10) => {
        //Probably should have url come from another function that can decide what url type we are looking for
        const url = `https://www.reddit.com/${category}.json?limit=${limit}`;
        const settings = { method: "Get"};
        let redditData = [];
        await fetch(url, settings)
            .then(res => res.json())
            .then(data => {
                for(let i = 0; i < limit; i++) {
                    const position = data.data.children[i];
                    redditData.push({
                        title: position.data.title,
                        url: position.data.url,
                        thumbnail: position.data.thumbnail,
                        score: position.data.score,
                        selftext: position.data.selftext,
                        author: position.data.author,
                        body: position.data.body
                    })
                }
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
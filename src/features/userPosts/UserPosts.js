import React, { useEffect } from "react";
import UserPost from "../userPost/UserPost";
import { getRedditFeed, selectIsLoading, selectIsRejected, selectRedditFeed } from "../redditAPI/redditAPISlice";
import { useDispatch, useSelector } from "react-redux";
import { selectCategoryFilter } from "../categoryFilter/categoryFilterSlice";

export default function UserPosts() {
    const dispatch = useDispatch();
    const category = useSelector(selectCategoryFilter);



    useEffect(() => {
        dispatch(getRedditFeed({category: 'hot', isDateRange: false, dateRange: 'Today', limit: 10, subreddit: false, subredditName: ''}));
    }, []);

    const postsLoading = useSelector(selectIsLoading);
    const postsFailed = useSelector(selectIsRejected);
    const redditPosts = useSelector(selectRedditFeed);

    const handleRedditFeed = () => {
        if(postsLoading) {
            
        } else if(postsFailed) {

        } else {

        }
    }

    return(
        <div>
            <p>UserPosts</p>
            {/* {redditPosts[0].title} */}
            <UserPost />
            <UserPost />
        </div>
    )
}
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
            return <p>Loading</p>;
        } else if(postsFailed) {
            return <p>Failed to load</p>;
        } else if(!postsFailed && !postsLoading) {
            // return <p>Got to get this to work</p>
            const redditData = [];
            for (const post of redditPosts) {
                console.log(post.title);
                redditData.push(
                    <UserPost 
                        title={post.title}
                        thumbnail={post.thumbnail}
                    />
                )
            }

            return redditData;

            // const post = redditPosts[0];
            // return <UserPost 
            // title={post.title}
            // thumbnail={post.thumbnail}
            // />;
        }
    }

    return(
        <div>
            <p>UserPosts</p>
            {handleRedditFeed()}
        </div>
    )
}
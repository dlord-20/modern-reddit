import React from 'react';
// import { useSelector } from 'react-redux';
// import { selectIsLoading, selectIsRejected } from '../redditAPI/redditAPISlice';


export default function UserPost(props) {
    const title = props.title;
    const thumbnail = props.thumbnail;
    // const loaded = useSelector(selectIsLoading);
    // const failed = useSelector(selectIsRejected);

    // const handleRedditInput = () => {
    //     console.log(loaded);
    //     console.log(failed);
    //     if(!loaded && !failed) {
    //         return <img src={redditPost.thumbnail} alt='#'/>
    //     }
    // }

    return (
        <div>
            {/* {handleRedditInput()} */}
            {/* <p>UserPost here</p>
            <p>Arrow up</p>
            <p>Score</p>
            <p>Arrow down</p> */}
            <p>{title}</p>
            <img src={thumbnail} alt='#'/>
        </div>
    );
}
import React from 'react';
import styles from './userpost.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSortDown, faSortUp} from '@fortawesome/free-solid-svg-icons';


export default function UserPost(props) {
    const title = props.title;
    const url = props.url;
    const thumbnail = props.thumbnail;
    const score = props.score;
    const selftext = props.selftext;
    const author = props.author;
    const body = props.body;

    const handleImageInput = () => {
        if(thumbnail === 'Loading...') {
            return null;
        }
        if(thumbnail !== null && thumbnail !== 'nsfw' && thumbnail !== 'default' && thumbnail !== 'default' && thumbnail !== 'spoiler' && thumbnail !== 'self' && thumbnail !== '') {
            return <img src={thumbnail} alt='#'/>
        }
        return null;
    }

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <div className={styles.image}>
                    {handleImageInput()}
                </div>
            </div>
            <div className={styles.scoreContainer}>
                <div className={styles.score}>
                    <p>{score}</p>
                    <FontAwesomeIcon className={styles.scoreArrows} icon={faSortUp} />
                    <FontAwesomeIcon className={styles.scoreArrows} icon={faSortDown} />
                </div>
            </div>
            <div className={styles.postInfo}>
                <p>{title}</p>
                <p>{url}</p>
                <p>{author}</p>
                <p>{selftext}</p>
                <p>{body}</p>
            </div>


        </div>
    );
}
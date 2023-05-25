import React from 'react';
import styles from './Post.module.css';

export const Post = (props: PostType) => {
    return (
        <div className={styles.item}>
            <img src="https://www.terminal-a.com.ua/wp-content/uploads/2017/05/Koala.jpg" alt=""/>
            <span>{props.message}</span> <span>Likes: {props.date.toLocaleDateString()}</span>
        </div>
    );
};

export type PostType = {
    message: string;
    date: Date;
}
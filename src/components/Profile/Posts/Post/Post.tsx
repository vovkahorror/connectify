import React from "react";
import styles from './Post.module.css'

type PostType = {
  message: string;
  likes: number;
}

export const Post = (props: PostType) => {
  return (
    <div className={styles.item}>
      <img src="https://www.terminal-a.com.ua/wp-content/uploads/2017/05/Koala.jpg" alt=""/>
      <span>{props.message}</span> <span>Likes: {props.likes}</span>
    </div>
  )
}
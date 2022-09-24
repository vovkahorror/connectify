import React from "react";
import {Post} from "./Post/Post";
import styles from './Posts.module.css';

export const Posts = () => {
  return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div><textarea></textarea></div>
        <button>Add post</button>
      </div>
      <div>
        <Post message={'I\'m glad to see you here'} likes={5}/>
        <Post message={'Hello! How are you?'} likes={4}/>
        <Post message={'It\'s my firs post'} likes={3}/>
      </div>
    </div>
  )
}
import React from "react";
import {Post} from "./Post/Post";
import styles from './Posts.module.css';

export const Posts = () => {
  const postsData = [
    {id: 1, message: 'I\'m glad to see you here', likes: 5},
    {id: 2, message: 'Hello! How are you?', likes: 4},
    {id: 3, message: 'It\'s my firs post', likes: 3},
  ];

  return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div><textarea></textarea></div>
        <button>Add post</button>
      </div>
      <div>
        {postsData.map(post => <Post key={post.id} message={post.message} likes={post.likes}/>)}
      </div>
    </div>
  )
}
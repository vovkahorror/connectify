import React from "react";
import {Post} from "./Post/Post";
import styles from './Posts.module.css';

export type PostsDataType = {
  id: number;
  message: string;
  likes: number;
}
type PostsPropsType = {
  postsData: Array<PostsDataType>;
}

export const Posts = (props: PostsPropsType) => {
  const postsElements = props.postsData.map(post => {
    return <Post key={post.id} message={post.message} likes={post.likes}/>
  });

  return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div><textarea></textarea></div>
        <button>Add post</button>
      </div>
      <div>
        {postsElements}
      </div>
    </div>
  )
}
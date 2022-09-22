import React from "react";
import { Post } from "./Post/Post";
import styles from './Posts.module.css';

export const Posts = () => {
  return (
    <div>
      My posts
      <div>
        New post
      </div>
      <div>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </div>
  )
}
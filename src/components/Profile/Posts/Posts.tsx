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
        <Post message={'I\'m glad to see you here'} likes={5}/>
        <Post message={'Hello! How are you?'} likes={4}/>
        <Post message={'It\'s my firs post'} likes={3}/>
      </div>
    </div>
  )
}
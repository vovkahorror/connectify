import React, {RefObject} from "react";
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
  const newPostElement: RefObject<HTMLTextAreaElement> = React.createRef();

  const addPost = () => {
      const text = newPostElement.current?.value;
      alert(text);
  }

  return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
            <textarea ref={newPostElement}></textarea>
        </div>
        <button onClick={addPost}>Add post</button>
      </div>
      <div>
        {postsElements}
      </div>
    </div>
  )
}
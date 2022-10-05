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
    addPost: (postMessage: string) => void;
}

export const Posts = (props: PostsPropsType) => {
    const postsElements = props.postsData.map(post => {
        return <Post key={post.id} message={post.message} likes={post.likes}/>;
    });
    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        const text = newPostElement.current?.value;
        if (text) {
            props.addPost(text);
            newPostElement.current.value = '';
        }
    };

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
    );
};
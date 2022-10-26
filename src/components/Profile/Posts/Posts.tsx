import React from "react";
import {Post} from "./Post/Post";
import styles from './Posts.module.css';
import {PostsDataType} from "../../../redux/redux-store";

type PostsPropsType = {
    updateNewPostText: (text: string) => void;
    addPost: () => void;
    postsData: Array<PostsDataType>;
    newPostText: string;
}

export const Posts = (props: PostsPropsType) => {
    const postsElements = props.postsData.map(post => {
        return <Post key={post.id} message={post.message} likes={post.likes}/>;
    });
    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const onAddPost = () => {
        props.addPost();
    };

    const onPostChange = () => {
        const text = newPostElement.current?.value;
        if (text || text === '') {
            props.updateNewPostText(text);
        }
    };

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        ref={newPostElement}
                        value={props.newPostText}
                    />
                </div>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    );
};
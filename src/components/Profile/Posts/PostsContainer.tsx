import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {Posts} from "./Posts";
import {StateType} from "../../../redux/redux-store";
import StoreContext from "../../../StoreContext";

export const PostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                const state: StateType = store.getState();

                const addPost = () => {
                    store.dispatch(addPostActionCreator());
                };

                const onPostChange = (text: string) => {
                    const action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
                };

                return (
                    <Posts
                        updateNewPostText={onPostChange}
                        addPost={addPost}
                        postsData={state.profilePage.postsData}
                        newPostText={state.profilePage.newPostText}
                    />
                );
            }}
        </StoreContext.Consumer>
    );
};
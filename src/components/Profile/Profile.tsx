import React from "react";
import styles from './Profile.module.css';
import {Posts} from "./Posts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    profileState: ProfilePageType;
    addPost: () => void;
    updateNewPostText: (newText: string) => void;
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <main>
            <ProfileInfo/>
            <Posts
                postsData={props.profileState.postsData}
                newPostText={props.profileState.newPostText}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
            />
        </main>
    );
};
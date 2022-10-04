import React from "react";
import styles from './Profile.module.css';
import {Posts} from "./Posts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../App";

type ProfilePropsType = {
    profileState: ProfilePageType;
    addPost: (postMessage: string) => void;
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <main>
            <ProfileInfo/>
            <Posts postsData={props.profileState.postsData} addPost={props.addPost}/>
        </main>
    );
};
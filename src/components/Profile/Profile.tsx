import React from "react";
import styles from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsContainer} from "./Posts/PostsContainer";

export const Profile = () => {
    return (
        <main>
            <ProfileInfo/>
            <PostsContainer/>
        </main>
    );
};
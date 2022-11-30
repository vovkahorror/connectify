import React from "react";
import styles from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsContainer} from "./Posts/PostsContainer";
import {ProfileAPIType} from "../../redux/profile-reducer";

type ProfilePropsType = {
    profile: ProfileAPIType | null;
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <main>
            <ProfileInfo profile={props.profile}/>
            <PostsContainer/>
        </main>
    );
};
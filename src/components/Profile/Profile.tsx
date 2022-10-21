import React from "react";
import styles from './Profile.module.css';
import {Posts} from "./Posts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/store";

type ProfilePropsType = {
    profileState: ProfilePageType;
    dispatch: (action: ActionsTypes) => void;
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <main>
            <ProfileInfo/>
            <Posts
                postsData={props.profileState.postsData}
                newPostText={props.profileState.newPostText}
                dispatch={props.dispatch}
            />
        </main>
    );
};
import React from "react";
import styles from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsContainer} from "./Posts/PostsContainer";
import {EmptyObject, Store} from "redux";
import {ActionsTypes} from "../../redux/redux-store";

type ProfilePropsType = {
    store: Store<EmptyObject & { profilePage: never; dialogsPage: never; sidebar: any; }, ActionsTypes>;
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <main>
            <ProfileInfo/>
            <PostsContainer store={props.store}/>
        </main>
    );
};
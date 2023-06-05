import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostsContainer} from './Posts/PostsContainer';
import {ProfileAPIType} from '../../redux/profile-reducer';
import styles from './Profile.module.scss';

export const Profile = (props: ProfilePropsType) => {
    return (
        <main className={styles.main}>
            <ProfileInfo {...props}/>
            <PostsContainer profile={props.profile}/>
        </main>
    );
};

type ProfilePropsType = {
    profile: ProfileAPIType | null;
    status: string;
    isOwner: boolean;
    isFollows: boolean;
    isFollowingInProgress: boolean;
    updateStatus: (status: string) => void;
    followUnfollowFlow: (userID: number, isFollow: boolean) => void;
    savePhoto: (file: File) => void;
    saveProfile: (formData: ProfileAPIType) => Promise<boolean>;
}
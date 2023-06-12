import React, {memo} from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostsContainer} from './Posts/PostsContainer';
import {ProfileAPIType} from '../../redux/profile-reducer';
import styles from './Profile.module.scss';

export const Profile = memo((props: ProfilePropsType) => {
    return (
        <main className={styles.main}>
            <ProfileInfo {...props}/>
            <PostsContainer profile={props.profile} userPhoto={props.userPhoto}/>
        </main>
    );
});

type ProfilePropsType = {
    profile: ProfileAPIType | null;
    status: string;
    isOwner: boolean;
    isFollows: boolean;
    isFollowingInProgress: boolean;
    userPhoto?: string | null;
    updateStatus: (status: string) => void;
    followUnfollowFlow: (userID: number, isFollow: boolean) => void;
    savePhoto: (file: File) => void;
    saveProfile: (formData: ProfileAPIType) => Promise<boolean>;
    sendMessage: (userID: number, newMessageBody: string) => Promise<void>;
}
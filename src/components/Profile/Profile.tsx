import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostsContainer} from './Posts/PostsContainer';
import {ProfileAPIType} from '../../redux/profile-reducer';

type ProfilePropsType = {
    profile: ProfileAPIType | null;
    status: string;
    updateStatus: (status: string) => void;
}

export const Profile = ({profile, status, updateStatus}: ProfilePropsType) => {
    return (
        <main>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>
            <PostsContainer/>
        </main>
    );
};
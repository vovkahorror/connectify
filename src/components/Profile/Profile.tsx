import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostsContainer} from './Posts/PostsContainer';
import {ProfileAPIType} from '../../redux/profile-reducer';

export const Profile = (props: ProfilePropsType) => {
    return (
        <main>
            <ProfileInfo {...props}/>
            <PostsContainer/>
        </main>
    );
};

type ProfilePropsType = {
    profile: ProfileAPIType | null;
    status: string;
    isOwner: boolean;
    updateStatus: (status: string) => void;
    savePhoto: (file: File) => void;
}
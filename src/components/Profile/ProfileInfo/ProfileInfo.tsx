import React from 'react';
import styles from './ProfileInfo.module.css';
import {ProfileAPIType} from '../../../redux/profile-reducer';
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks';

type ProfileInfoPropsType = {
    profile: ProfileAPIType | null;
    status: string;
    updateStatus: (status: string) => void;
}

export const ProfileInfo = ({profile, status, updateStatus}: ProfileInfoPropsType) => {
    if (!profile) {
        return <Preloader/>;
    }

    return (
        <div>
            <div className={styles.descriptionBlock}>
                {profile.photos.large && <div><img src={profile.photos.large} alt=""/></div>}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                {/*{props.profile.fullName && <div>{props.profile.fullName}</div>}*/}
                {/*{props.profile.aboutMe && <div>{props.profile.aboutMe}</div>}*/}
                {/*{props.profile.contacts.facebook && <div>{props.profile.contacts.facebook}</div>}*/}
            </div>
        </div>
    );
};
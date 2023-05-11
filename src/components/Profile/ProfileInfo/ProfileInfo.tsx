import React, {ChangeEvent} from 'react';
import styles from './ProfileInfo.module.css';
import {ProfileAPIType} from '../../../redux/profile-reducer';
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.png';

export const ProfileInfo = ({profile, status, isOwner, updateStatus, savePhoto}: ProfileInfoPropsType) => {
    if (!profile) {
        return <Preloader/>;
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };

    return (
        <div>
            <div className={styles.descriptionBlock}>
                <div><img className={styles.mainPhoto} src={profile.photos.large || userPhoto} alt=""/></div>
                {isOwner &&
                    <input type="file" onChange={onMainPhotoSelected} accept=".jpg, .jpeg, .png"/>}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                {/*{props.profile.fullName && <div>{props.profile.fullName}</div>}*/}
                {/*{props.profile.aboutMe && <div>{props.profile.aboutMe}</div>}*/}
                {/*{props.profile.contacts.facebook && <div>{props.profile.contacts.facebook}</div>}*/}
            </div>
        </div>
    );
};

type ProfileInfoPropsType = {
    profile: ProfileAPIType | null;
    status: string;
    updateStatus: (status: string) => void;
    isOwner: boolean;
    savePhoto: (file: File) => void;
}
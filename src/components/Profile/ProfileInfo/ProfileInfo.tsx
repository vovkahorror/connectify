import React, {ChangeEvent, useState} from 'react';
import styles from './ProfileInfo.module.css';
import {ProfileAPIType} from '../../../redux/profile-reducer';
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.png';
import {ProfileData} from './ProfileData';
import {ProfileDataFormRedux} from './ProfileDataForm';

export const ProfileInfo = ({profile, status, isOwner, updateStatus, savePhoto, saveProfile}: ProfileInfoPropsType) => {
    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>;
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };

    const onSubmit = (formData: ProfileAPIType) => {
        saveProfile(formData).then(() => setEditMode(false));
        // setEditMode(false);
    };

    return (
        <div>
            <div className={styles.descriptionBlock}>
                <div className={styles.imageBlock}><img className={styles.mainPhoto}
                                                        src={profile.photos.large || userPhoto} alt=""/>
                    {isOwner &&
                        <input type="file" onChange={onMainPhotoSelected} accept=".jpg, .jpeg, .png"/>}
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                </div>

                {editMode
                    ? <ProfileDataFormRedux initialValues={profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => setEditMode(true)}/>}
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
    saveProfile: (formData: ProfileAPIType) => Promise<boolean>;
}


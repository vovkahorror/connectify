import React, {ChangeEvent, useState} from 'react';
import styles from './ProfileInfo.module.scss';
import {ProfileAPIType} from '../../../redux/profile-reducer';
import {Preloader} from '../../common/Preloader/Preloader';
import userPhoto from '../../../assets/images/user.svg';
import {ProfileData} from './ProfileData';
import {ProfileDataFormRedux} from './ProfileDataForm';
import {ReactComponent as UploadIcon} from '../../../assets/icons/upload.svg';

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
        saveProfile(formData).then(() => setEditMode(false)).catch(e => e);
    };

    return (
        <div className={styles.descriptionBlock}>
            <div className={styles.imageBlock}>
                <img className={styles.mainPhoto} src={profile.photos.large || userPhoto} alt=""/>
                {isOwner && <label className={styles.uploadWrapper}>
                    <input className={styles.uploadWrapper__input} type="file" onChange={onMainPhotoSelected}
                           accept=".jpg, .jpeg, .png"/>
                    <div className={styles.uploadIconBlock}><UploadIcon className={styles.uploadIconBlock__icon}/></div>
                </label>}
            </div>

            {editMode
                ? <ProfileDataFormRedux initialValues={profile} onSubmit={onSubmit}/>
                : <ProfileData profile={profile} isOwner={isOwner} status={status} updateStatus={updateStatus}
                               goToEditMode={() => setEditMode(true)}/>}
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


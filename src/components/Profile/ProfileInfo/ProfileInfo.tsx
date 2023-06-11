import React, {ChangeEvent, useState} from 'react';
import styles from './ProfileInfo.module.scss';
import {ProfileAPIType} from '../../../redux/profile-reducer';
import {Preloader} from '../../common/Preloader/Preloader';
import userPhoto from '../../../assets/images/user.svg';
import {ProfileData} from './ProfileData/ProfileData';
import {ProfileDataFormRedux} from './ProfileDataForm/ProfileDataForm';
import {ReactComponent as UploadIcon} from '../../../assets/icons/upload.svg';
import {Modal} from 'antd';

export const ProfileInfo = ({
                                profile,
                                status,
                                isFollows,
                                isFollowingInProgress,
                                isOwner,
                                updateStatus,
                                followUnfollowFlow,
                                savePhoto,
                                saveProfile,
                            }: ProfileInfoPropsType) => {
    const [editMode, setEditMode] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [messageText, setMessageText] = useState('');

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

    const showModal = () => setIsModalOpen(true);

    const handleOk = () => setIsModalOpen(false);

    const handleCancel = () => setIsModalOpen(false);
    
    const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessageText(e.currentTarget.value);
    };

    return (
        <div className={styles.profileInfo}>
            <div className={styles.photoButtonsWrapper}>
                <div className={styles.imageBlock}>
                    <img className={styles.mainPhoto} src={profile.photos.large || userPhoto} alt=""/>
                    {isOwner &&
                        <label className={styles.uploadWrapper}>
                            <input className={styles.input} type="file" onChange={onMainPhotoSelected}
                                   accept=".jpg, .jpeg, .png"/>
                            <div className={styles.uploadIconBlock}><UploadIcon className={styles.icon}/></div>
                        </label>}
                </div>

                {!isOwner &&
                    <>
                        <button className={isFollows ? styles.unfollowButton : styles.followButton}
                                disabled={isFollowingInProgress}
                                onClick={() => followUnfollowFlow(profile.userId, isFollows)}>
                            {isFollows ? 'Unfollow' : 'Follow'}
                        </button>
                        <button className={styles.writeMessageButton} onClick={showModal}>
                            Write a message
                        </button>
                    </>
                }

                <Modal title={`Write your message to ${profile.fullName}`} open={isModalOpen} onOk={handleOk}
                       onCancel={handleCancel} centered
                       footer={[
                           <button className={styles.cancelButton} onClick={handleCancel}>Cancel</button>,
                           <button className={styles.sendButton} onClick={handleOk}>Send</button>,
                       ]}>
                    <hr className={styles.divider}/>
                    <textarea value={messageText} onChange={handleMessageChange}/>
                </Modal>
            </div>

            {editMode
                ? <ProfileDataFormRedux initialValues={{...profile, disableEditMode: () => setEditMode(false)}}
                                        onSubmit={onSubmit}/>
                : <ProfileData profile={profile} isOwner={isOwner} status={status} updateStatus={updateStatus}
                               goToEditMode={() => setEditMode(true)}/>}
        </div>
    );
};

type ProfileInfoPropsType = {
    profile: ProfileAPIType | null;
    status: string;
    isFollows: boolean;
    isFollowingInProgress: boolean;
    updateStatus: (status: string) => void;
    followUnfollowFlow: (userID: number, isFollow: boolean) => void;
    isOwner: boolean;
    savePhoto: (file: File) => void;
    saveProfile: (formData: ProfileAPIType) => Promise<boolean>;
}


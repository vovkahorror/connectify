import React, {ChangeEvent, useState} from 'react';
import styles from './ProfileInfo.module.scss';
import {ProfileAPIType} from '../../../redux/profile-reducer';
import {Preloader} from '../../common/Preloader/Preloader';
import userNoPhoto from '../../../assets/images/user.svg';
import {ProfileData} from './ProfileData/ProfileData';
import {ProfileDataFormRedux} from './ProfileDataForm/ProfileDataForm';
import {ReactComponent as UploadIcon} from '../../../assets/icons/upload.svg';
import {message} from 'antd';
import SendMessageModal from './SendMessageModal/SendMessageModal';
import {useTranslation} from 'react-i18next';

export const ProfileInfo = ({
                                profile,
                                status,
                                isFollows,
                                isFollowingInProgress,
                                isOwner,
                                userPhoto,
                                updateStatus,
                                followUnfollowFlow,
                                savePhoto,
                                saveProfile,
                                sendMessage,
                            }: ProfileInfoPropsType) => {
    const {t} = useTranslation('profile');
    const [editMode, setEditMode] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();

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

    const hideModal = () => setIsModalOpen(false);

    return (
        <div className={styles.profileInfo}>
            {contextHolder}

            <div className={styles.photoButtonsWrapper}>
                <div className={styles.imageBlock}>
                    <img className={styles.mainPhoto} src={profile.photos.large || userNoPhoto} alt=""/>
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
                            {isFollows ? t('unsubscribe') : t('subscribe')}
                        </button>
                        <button className={styles.writeMessageButton} onClick={showModal}>
                            {t('writeMessage')}
                        </button>

                        <SendMessageModal isModalOpen={isModalOpen} userID={profile.userId} messageApi={messageApi}
                                          userPhoto={userPhoto} fullName={profile.fullName} sendMessage={sendMessage}
                                          hideModal={hideModal}/>
                    </>
                }
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
    userPhoto?: string | null;
    savePhoto: (file: File) => void;
    saveProfile: (formData: ProfileAPIType) => Promise<boolean>;
    sendMessage: (userID: number, newMessageBody: string) => Promise<void>;
}


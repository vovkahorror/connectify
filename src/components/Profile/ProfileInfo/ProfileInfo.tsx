import React, {useState} from 'react';
import styles from './ProfileInfo.module.scss';
import {ProfileAPIType} from '../../../redux/profile-reducer';
import {Preloader} from '../../common/Preloader/Preloader';
import userLight from '../../../assets/images/userLight.svg';
import userDark from '../../../assets/images/userDark.svg';
import {ProfileData} from './ProfileData/ProfileData';
import {ProfileDataFormRedux} from './ProfileDataForm/ProfileDataForm';
import {ConfigProvider, message, theme} from 'antd';
import SendMessageModal from './SendMessageModal/SendMessageModal';
import {useTranslation} from 'react-i18next';
import {useTheme} from '../../../theme/useTheme';
import {UploadPhotoModal} from './UploadPhotoModal/UploadPhotoModal';

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
    const myTheme = useTheme().theme;
    const themeClassName = myTheme === 'light' ? styles.light : styles.dark;
    const userNoPhoto = myTheme === 'light' ? userLight : userDark;

    if (!profile) {
        return <Preloader/>;
    }

    const onMainPhotoSelected = (value: any) => {
        savePhoto(value);
    };

    const onSubmit = (formData: ProfileAPIType) => {
        saveProfile(formData).then(() => setEditMode(false)).catch(e => e);
    };

    const showModal = () => setIsModalOpen(true);

    const hideModal = () => setIsModalOpen(false);

    return (
        <div className={`${styles.profileInfo} ${themeClassName}`}>
            <ConfigProvider theme={{algorithm: myTheme === 'light' ? theme.defaultAlgorithm : theme.darkAlgorithm}}>
                {contextHolder}
            </ConfigProvider>

            <div className={styles.photoButtonsWrapper}>
                <div className={styles.imageBlock}>
                    <img className={styles.mainPhoto} src={profile.photos.large || userNoPhoto} alt=""/>
                    {isOwner &&
                        <UploadPhotoModal onMainPhotoSelected={onMainPhotoSelected}/>}
                </div>

                {!isOwner &&
                    <>
                        <button
                            className={`${isFollows ? styles.unfollowButton : styles.followButton} ${themeClassName}`}
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


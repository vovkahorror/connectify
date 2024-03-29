import {ContactsProfileAPIType, ProfileAPIType} from '../../../../redux/profile-reducer';
import React, {FC, ReactNode} from 'react';
import {ProfileStatusWithHooks} from './ProfileStatus/ProfileStatusWithHooks';
import {ReactComponent as FacebookIcon} from '../../../../assets/icons/facebook.svg';
import {ReactComponent as WebsiteIcon} from '../../../../assets/icons/website.svg';
import {ReactComponent as TwitterIcon} from '../../../../assets/icons/twitter.svg';
import {ReactComponent as InstagramIcon} from '../../../../assets/icons/instagram.svg';
import {ReactComponent as YoutubeIcon} from '../../../../assets/icons/youtube.svg';
import {ReactComponent as GithubIcon} from '../../../../assets/icons/github.svg';
import {ReactComponent as MainLinkIcon} from '../../../../assets/icons/mainLink.svg';
import {Contact} from './Contact/Contact';
import styles from './ProfileData.module.scss';
import {ReactComponent as EditIcon} from '../../../../assets/icons/edit.svg';
import {useTranslation} from 'react-i18next';
import {useTheme} from '../../../../theme/useTheme';

export const ProfileData: FC<ProfileDataPropsType> = ({profile, isOwner, status, updateStatus, goToEditMode}) => {
    const {t} = useTranslation('profile');
    const {theme} = useTheme();
    const themeClassName = theme === 'light' ? styles.light : styles.dark;

    const mappedContacts = Object.keys(profile.contacts).map(key => {
        const contactValue = profile.contacts[key as keyof ContactsProfileAPIType];
        let contactIcon: ReactNode;

        switch (key) {
            case 'facebook':
                contactIcon = <FacebookIcon/>;
                break;
            case 'website':
                contactIcon = <WebsiteIcon/>;
                break;
            case 'twitter':
                contactIcon = <TwitterIcon/>;
                break;
            case 'instagram':
                contactIcon = <InstagramIcon/>;
                break;
            case 'youtube':
                contactIcon = <YoutubeIcon/>;
                break;
            case 'github':
                contactIcon = <GithubIcon/>;
                break;
            case 'mainLink':
                contactIcon = <MainLinkIcon/>;
                break;
            default:
                contactIcon = null;
        }

        if (contactValue && key !== 'vk') {
            return <Contact contactIcon={contactIcon} contactTitle={key} contactValue={contactValue} key={key}/>;
        } else {
            return null;
        }
    });

    const noInfo = <span className={styles.noInfo}>{t('noInfo')}</span>;

    return (
        <div className={`${styles.profileData} ${themeClassName}`}>
            {isOwner && <EditIcon className={`${styles.editButton} ${themeClassName}`} onClick={goToEditMode}/>}
            <h2 className={styles.fullName}>{profile.fullName}</h2>
            <ProfileStatusWithHooks status={status} isOwner={isOwner} updateStatus={updateStatus}/>
            <ul className={styles.infoList}>
                <li><span className={styles.itemTitle}>{t('aboutMe')}:</span> {profile.aboutMe || noInfo}</li>
                <li><span
                    className={styles.itemTitle}>{t('lookingForAJob')}:</span> {profile.lookingForAJob ? t('yes') : t('no')}
                </li>
                {profile.lookingForAJob && <li><span
                    className={styles.itemTitle}>{t('lookingForAJobDescription')}:</span> {profile.lookingForAJobDescription || noInfo}
                </li>}
                <li><span className={styles.itemTitle}>{t('contacts')}: </span>
                    {!!Object.values(profile.contacts).filter(value => value !== null).length
                        ? <ul className={`${styles.contactsList} ${themeClassName}`}>
                            {mappedContacts}
                        </ul>
                        : noInfo
                    }
                </li>
            </ul>
        </div>
    );
};

type ProfileDataPropsType = {
    profile: ProfileAPIType;
    isOwner: boolean;
    status: string;
    updateStatus: (status: string) => void;
    goToEditMode: () => void;
}


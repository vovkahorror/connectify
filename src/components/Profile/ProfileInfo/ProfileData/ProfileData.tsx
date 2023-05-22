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

export const ProfileData: FC<ProfileDataPropsType> = ({profile, isOwner, status, updateStatus, goToEditMode}) => {
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

    return (
        <div>
            {isOwner && <button onClick={goToEditMode}>Edit</button>}
            <h2>{profile.fullName}</h2>
            <ProfileStatusWithHooks status={status} isOwner={isOwner} updateStatus={updateStatus}/>
            <ul>
                <li>About me: {profile.aboutMe}</li>
                <li>Looking for a job: {profile.lookingForAJob ? 'yes' : 'no'}</li>
                {profile.lookingForAJob && <li>My professional skills: {profile.lookingForAJobDescription}</li>}
                <li>Contacts:
                    <ul>
                        {mappedContacts}
                    </ul>
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


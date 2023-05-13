import {ContactsProfileAPIType, ProfileAPIType} from '../../../redux/profile-reducer';
import React from 'react';

export const ProfileData = ({profile, isOwner, goToEditMode}: ProfileDataPropsType) => {
    const mappedContacts = Object.keys(profile.contacts).map(key => {
        const contactValue = profile.contacts[key as keyof ContactsProfileAPIType];
        if (contactValue && key !== 'vk') {
            return <Contact contactTitle={key} contactValue={contactValue} key={key}/>;
        } else {
            return null;
        }
    });

    return (
        <div>
            {isOwner && <button onClick={goToEditMode}>Edit</button>}
            <h2>{profile.fullName}</h2>
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

const Contact = ({contactTitle, contactValue}: ContactPropsType) => {
    return (
        <li>{contactTitle}: {contactValue}</li>
    );
};

type ProfileDataPropsType = {
    profile: ProfileAPIType;
    isOwner: boolean;
    goToEditMode: () => void;
}

type ContactPropsType = {
    contactTitle: string;
    contactValue: string;
}
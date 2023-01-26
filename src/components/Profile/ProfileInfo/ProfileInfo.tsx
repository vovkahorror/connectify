import React from "react";
import styles from './ProfileInfo.module.css';
import {ProfileAPIType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from './ProfileStatus';

type ProfileInfoPropsType = {
    profile: ProfileAPIType | null;
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>;
    }

    return (
        <div>
            <div className={styles.descriptionBlock}>
                {props.profile.photos.large && <div><img src={props.profile.photos.large} alt=""/></div>}
                <ProfileStatus status={'Hello!!!'}/>
                {props.profile.fullName && <div>{props.profile.fullName}</div>}
                {props.profile.aboutMe && <div>{props.profile.aboutMe}</div>}
                {props.profile.contacts.facebook && <div>{props.profile.contacts.facebook}</div>}
            </div>
        </div>
    );
};
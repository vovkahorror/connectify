import React from "react";
import styles from './ProfileInfo.module.css';
import {ProfileAPIType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";

type ProfileInfoPropsType = {
    profile: ProfileAPIType | null;
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>;
    }

    return (
        <div>
            <div>
                <img src="https://mobimg.b-cdn.net/v3/fetch/61/61f20e391ef31aea89544874388ce749.jpeg?w=1000&r=0.5625"
                     alt=""/>
            </div>
            <div className={styles.descriptionBlock}>
                {props.profile.photos.large && <div><img src={props.profile.photos.large} alt=""/></div>}
                {props.profile.fullName && <div>{props.profile.fullName}</div>}
                {props.profile.aboutMe && <div>{props.profile.aboutMe}</div>}
                {props.profile.contacts.facebook && <div>{props.profile.contacts.facebook}</div>}
            </div>
        </div>
    );
};
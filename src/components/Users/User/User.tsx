import {NavLink} from 'react-router-dom';
import userPhoto from '../../../assets/images/user.svg';
import styles from './User.module.scss';
import React from 'react';
import {UserDataType} from '../../../redux/users-reducer';
import {useTranslation} from 'react-i18next';

export const User = ({user, followingInProgress, follow, unfollow}: UserPropsType) => {
    const {t} = useTranslation('users');

    return (
        <div className={styles.user}>
            <NavLink to={`/profile/${user.id}`}>
                <img src={user.photos.large || userPhoto} className={styles.userPhoto} alt={''}/>
            </NavLink>
            <div className={styles.userInfo}>
                <div>
                    <NavLink className={styles.userName} to={`/profile/${user.id}`}>
                        {user.name}
                    </NavLink>
                    <div className={styles.userStatus}>{user.status}</div>
                </div>
                {user.followed
                    ?
                    <button className={styles.unfollowButton} disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => unfollow(user.id)}>{t('unsubscribe')}</button>
                    : <button className={styles.followButton} disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => follow(user.id)}>{t('subscribe')}</button>}
            </div>
        </div>
    );
};

type UserPropsType = {
    user: UserDataType;
    followingInProgress: Array<number>;
    follow: (userID: number) => void;
    unfollow: (userID: number) => void;
}
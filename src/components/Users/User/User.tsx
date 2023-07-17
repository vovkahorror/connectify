import {NavLink} from 'react-router-dom';
import styles from './User.module.scss';
import React from 'react';
import {UserDataType} from '../../../redux/users-reducer';
import {useTranslation} from 'react-i18next';
import {useTheme} from '../../../theme/useTheme';
import userLight from '../../../assets/images/userLight.svg';
import userDark from '../../../assets/images/userDark.svg';

export const User = ({user, followingInProgress, follow, unfollow}: UserPropsType) => {
    const {t} = useTranslation('users');
    const {theme} = useTheme();
    const themeClassName = theme === 'light' ? styles.light : styles.dark;
    const userNoPhoto = theme === 'light' ? userLight : userDark;

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };

    return (
        <div className={`${styles.user} ${themeClassName}`}>
            <NavLink to={`/profile/${user.id}`} onClick={scrollToTop}>
                <img src={user.photos.large || userNoPhoto} className={styles.userPhoto} alt={''}/>
            </NavLink>
            <div className={styles.userInfo}>
                <div>
                    <NavLink className={`${styles.userName} ${themeClassName}`} to={`/profile/${user.id}`}
                             onClick={scrollToTop}>
                        {user.name}
                    </NavLink>
                    <div className={`${styles.userStatus} ${themeClassName}`}>{user.status}</div>
                </div>
                {user.followed
                    ?
                    <button className={`${styles.unfollowButton} ${themeClassName}`}
                            disabled={followingInProgress.some(id => id === user.id)}
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
import {NavLink} from 'react-router-dom';
import userPhoto from '../../../assets/images/user.png';
import styles from './User.module.css';
import React from 'react';
import {UserDataType} from '../../../redux/users-reducer';

export const User = ({user, followingInProgress, follow, unfollow}: UserPropsType) => {
    return (
        <div>
            <span>
                <div>
                    <NavLink to={`/profile/${user.id}`}><img
                        src={user.photos.large ? user.photos.large : userPhoto}
                        className={styles.userPhoto} alt={''}/></NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => unfollow(user.id)}>Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => follow(user.id)}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{'user.location.city'}</div>
                    <div>{'user.location.country'}</div>
                </span>
            </span>
        </div>
    );
};

type UserPropsType = {
    user: UserDataType;
    followingInProgress: Array<number>;
    follow: (userID: number) => void;
    unfollow: (userID: number) => void;
}
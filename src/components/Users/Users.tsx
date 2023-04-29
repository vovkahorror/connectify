import React from 'react';
import styles from './Users.module.css';
import {UserDataType} from '../../redux/users-reducer';
import userPhoto from '../../assets/images/user.png';
import {NavLink} from 'react-router-dom';
import {Paginator} from '../common/Paginator/Paginator';

export const Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}: UsersPropsType) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <Paginator currentPage={currentPage} totalUsersCount={totalUsersCount} pageSize={pageSize}
                       onPageChanged={onPageChanged}/>

            {users.map((user: UserDataType) => {
                return (
                    <div key={user.id}>
                        <span>
                            <div>
                                <NavLink to={`/profile/${user.id}`}><img
                                    src={user.photos.large ? user.photos.large : userPhoto}
                                    className={styles.userPhoto} alt={''}/></NavLink>
                            </div>
                            <div>
                                {user.followed
                                    ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                                              onClick={() => props.unfollow(user.id)}>Unfollow</button>
                                    : <button disabled={props.followingInProgress.some(id => id === user.id)}
                                              onClick={() => props.follow(user.id)}>Follow</button>}
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
            })}
        </div>
    );
};


export type UsersPropsType = {
    users: UserDataType[];
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    followingInProgress: Array<number>;
    onPageChanged: (pageNumber: number) => void;
    follow: (userID: number) => void;
    unfollow: (userID: number) => void;
}
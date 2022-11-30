import React from 'react';
import styles from "./Users.module.css";
import {UserDataType} from "../../redux/users-reducer";
import userPhoto from "../../assets/images/user.png";

type UsersPropsType = {
    users: UserDataType[];
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    follow: (userID: number) => void;
    unfollow: (userID: number) => void;
    onPageChanged: (pageNumber: number) => void;
}

export const Users = (props: UsersPropsType) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return (
                        <span
                            className={styles.pageNumber + ' ' + (props.currentPage === p ? styles.selectedPageNumber : '')}
                            onClick={() => props.onPageChanged(p)}
                        >{p}</span>
                    );
                })}
            </div>
            {props.users.map((user: UserDataType) => {
                return (
                    <div key={user.id}>
                        <span>
                            <div><img src={user.photos.large ? user.photos.large : userPhoto}
                                      className={styles.userPhoto} alt={''}/></div>
                            <div>
                                {user.followed ?
                                    <button onClick={() => props.unfollow(user.id)}>Unfollow</button> :
                                    <button onClick={() => props.follow(user.id)}>Follow</button>}
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
import React from 'react';
import styles from "./Users.module.css";
import {UserDataType} from "../../redux/users-reducer";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import axios from "axios";

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
                            <div>
                                <NavLink to={`/profile/${user.id}`}><img
                                    src={user.photos.large ? user.photos.large : userPhoto}
                                    className={styles.userPhoto} alt={''}/></NavLink>
                            </div>
                            <div>
                                {user.followed
                                    ? <button onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                            withCredentials: true,
                                            headers: {'API-KEY': 'd09df4a6-624c-4f2c-a2ad-d9a381941271'},
                                        }).then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(user.id);
                                            }
                                        });
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                            withCredentials: true,
                                            headers: {'API-KEY': 'd09df4a6-624c-4f2c-a2ad-d9a381941271'},
                                        }).then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(user.id);
                                            }
                                        });
                                    }}>Follow</button>}
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
import axios from 'axios';
import React from 'react';
import {UserDataType} from "../../redux/users-reducer";
import styles from './Users.module.css';
import userPhoto from '../../assets/images/user.png'

type UsersPropsType = {
    users: UserDataType[],
    follow: (userID: number) => void;
    unfollow: (userID: number) => void;
    setUsers: (users: UserDataType[]) => void;
}

export const Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items);
        });
    }

    return (
        <div>
            {props.users.map(user => {
                return (
                    <div key={user.id}>
                        <span>
                            <div><img src={user.photos.small ? user.photos.small : userPhoto} className={styles.userPhoto}/></div>
                            <div>
                                {user.followed ? <button onClick={() => props.unfollow(user.id)}>Unfollow</button> :
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
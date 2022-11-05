import React from 'react';
import {UserDataType} from "../../redux/users-reducer";
import styles from './Users.module.css';

type UsersPropsType = {
    users: UserDataType[],
    follow: (userID: number) => void;
    unfollow: (userID: number) => void;
    setUsers: (users: UserDataType[]) => void;
}

export const Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://kartinkin.net/uploads/posts/2022-07/1657654795_12-kartinkin-net-p-vzhik-chip-i-deil-kartinki-12.jpg',
                followed: false,
                fullName: 'Volodymyr',
                status: 'Ready to code',
                location: {
                    city: 'Kherson',
                    country: 'Ukraine',
                },
            },
            {
                id: 2,
                photoUrl: 'https://cs14.pikabu.ru/post_img/2022/01/23/0/1642885831185410880.jpg',
                followed: true,
                fullName: 'Anastasia',
                status: 'I like flowers',
                location: {
                    city: 'Kherson',
                    country: 'Ukraine',
                },
            },
            {
                id: 3,
                photoUrl: 'https://www.kinodisk.com/shots/2492_09.jpg',
                followed: false,
                fullName: 'Pavlo',
                status: 'Everyone annoys me!',
                location: {
                    city: 'Kryvyi Rih',
                    country: 'Ukraine',
                },
            },
        ]);
    }

    return (
        <div>
            {props.users.map(user => {
                return (
                    <div key={user.id}>
                        <span>
                            <div><img src={user.photoUrl} className={styles.userPhoto}/></div>
                            <div>
                                {user.followed ? <button onClick={() => props.unfollow(user.id)}>Unfollow</button> :
                                    <button onClick={() => props.follow(user.id)}>Follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{user.fullName}</div>
                                <div>{user.status}</div>
                            </span>
                            <span>
                                <div>{user.location.city}</div>
                                <div>{user.location.country}</div>
                            </span>
                        </span>
                    </div>
                );
            })}
        </div>
    );
};
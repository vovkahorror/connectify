import React from 'react';
import {UserDataType} from '../../redux/users-reducer';
import {Paginator} from '../common/Paginator/Paginator';
import {User} from './User/User';
import styles from './Users.module.scss';

export const Users = ({
                          currentPage,
                          totalUsersCount,
                          pageSize,
                          onPageChanged,
                          users,
                          followingInProgress,
                          follow,
                          unfollow,
                      }: UsersPropsType) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <main className={styles.main}>
            <Paginator currentPage={currentPage} totalItemsCount={totalUsersCount} pageSize={pageSize}
                       onPageChanged={onPageChanged}/>

            <div className={styles.usersList}>
                {users.map((user: UserDataType) => <User key={user.id} user={user}
                                                         followingInProgress={followingInProgress}
                                                         follow={follow}
                                                         unfollow={unfollow}/>)}
            </div>
        </main>
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
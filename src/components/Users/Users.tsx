import React from 'react';
import {UserDataType} from '../../redux/users-reducer';
import {Paginator} from '../common/Paginator/Paginator';
import {User} from './User/User';
import styles from './Users.module.scss';
import {UsersSearch} from './UsersSearch/UsersSearch';

export const Users = ({
                          currentPage,
                          totalUsersCount,
                          pageSize,
                          nameSearch,
                          onPageChanged,
                          users,
                          followingInProgress,
                          setNameSearch,
                          follow,
                          unfollow,
                      }: UsersPropsType) => {
    return (
        <main className={styles.main}>
            <UsersSearch nameSearch={nameSearch} setNameSearch={setNameSearch}/>

            <Paginator currentPage={currentPage} totalItemsCount={totalUsersCount} pageSize={pageSize}
                       onPageChanged={onPageChanged}/>

            <div className={styles.usersList}>
                {users.map((user: UserDataType) =>
                    <User key={user.id} user={user}
                          followingInProgress={followingInProgress}
                          follow={follow}
                          unfollow={unfollow}/>)
                }
            </div>

            {!users.length && <span className={styles.notFound}>Users not found</span>}
        </main>
    );
};


export type UsersPropsType = {
    users: UserDataType[];
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    nameSearch: string;
    followingInProgress: Array<number>;
    setNameSearch: (nameSearch: string) => void;
    onPageChanged: (pageNumber: number) => void;
    follow: (userID: number) => void;
    unfollow: (userID: number) => void;
}
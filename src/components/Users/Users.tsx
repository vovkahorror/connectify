import React from 'react';
import {UserDataType} from '../../redux/users-reducer';
import {Paginator} from '../common/Paginator/Paginator';
import {User} from './User/User';
import styles from './Users.module.scss';
import {UsersSearch} from './UsersSearch/UsersSearch';
import {useTheme} from '../../theme/useTheme';

export const Users = ({
                          currentPage,
                          totalUsersCount,
                          pageSize,
                          nameSearch,
                          onlyFollowed,
                          onPageChanged,
                          users,
                          followingInProgress,
                          setNameSearch,
                          setOnlyFollowed,
                          follow,
                          unfollow,
                      }: UsersPropsType) => {
    const {theme} = useTheme();
    const themeClassName = theme === 'light' ? styles.light : styles.dark;

    return (
        <main className={`${styles.main} ${themeClassName}`}>
            <UsersSearch nameSearch={nameSearch} onlyFollowed={onlyFollowed} setNameSearch={setNameSearch}
                         setOnlyFollowed={setOnlyFollowed}/>

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

            {!users.length && <span className={`${styles.notFound} ${themeClassName}`}>Users not found</span>}
        </main>
    );
};


export type UsersPropsType = {
    users: UserDataType[];
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    nameSearch: string;
    onlyFollowed: boolean | null;
    followingInProgress: Array<number>;
    setNameSearch: (nameSearch: string) => void;
    setOnlyFollowed: (onlyFollowed: boolean | null) => void;
    onPageChanged: (pageNumber: number) => void;
    follow: (userID: number) => void;
    unfollow: (userID: number) => void;
}
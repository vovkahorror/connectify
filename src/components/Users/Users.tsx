import axios from 'axios';
import React from 'react';
import {UserDataType, UsersType} from "../../redux/users-reducer";
import styles from './Users.module.css';
import userPhoto from '../../assets/images/user.png';

type UsersPropsType = {
    users: UserDataType[];
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    follow: (userID: number) => void;
    unfollow: (userID: number) => void;
    setUsers: (users: UserDataType[]) => void;
    setCurrentPage: (currentPage: number) => void;
    setTotalUsersCount: (totalCount: number) => void;
}

export class Users extends React.Component<UsersPropsType, UsersType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount)
        });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
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
                                className={styles.pageNumber + ' ' + (this.props.currentPage === p ? styles.selectedPageNumber : '')}
                                onClick={() => this.onPageChanged(p)}
                            >{p}</span>
                        );
                    })}
                </div>
                {this.props.users.map((user: UserDataType) => {
                    return (
                        <div key={user.id}>
                        <span>
                            <div><img src={user.photos.large ? user.photos.large : userPhoto}
                                      className={styles.userPhoto} alt={''}/></div>
                            <div>
                                {user.followed ?
                                    <button onClick={() => this.props.unfollow(user.id)}>Unfollow</button> :
                                    <button onClick={() => this.props.follow(user.id)}>Follow</button>}
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
    }
}
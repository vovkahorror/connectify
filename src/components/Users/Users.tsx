import axios from 'axios';
import React from 'react';
import {UserDataType, UsersType} from "../../redux/users-reducer";
import styles from './Users.module.css';
import userPhoto from '../../assets/images/user.png';

type UsersPropsType = {
    users: UserDataType[],
    follow: (userID: number) => void;
    unfollow: (userID: number) => void;
    setUsers: (users: UserDataType[]) => void;
}

export class Users extends React.Component<UsersPropsType, UsersType> {
    constructor(props: UsersPropsType) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return (
            <div>
                {this.props.users.map((user: UserDataType) => {
                    return (
                        <div key={user.id}>
                        <span>
                            <div><img src={user.photos.large ? user.photos.large : userPhoto}
                                      className={styles.userPhoto}/></div>
                            <div>
                                {user.followed ? <button onClick={() => this.props.unfollow(user.id)}>Unfollow</button> :
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
import React, {FC, memo} from 'react';
import {ChatMessageType} from '../../../../api/chat-api';
import {NavLink} from 'react-router-dom';
import styles from './Message.module.scss';

export const Message: FC<ChatMessageType> = memo(({userId, photo, userName, message}) => {
    return (
        <div className={styles.message}>
            <NavLink to={`/profile/${userId}`}>
                <img className={styles.userPhoto} src={photo} alt=""/>
            </NavLink>

            <div className={styles.messageInfo}>
                <NavLink className={styles.userName} to={`/profile/${userId}`}>
                    <span>{userName}</span>
                </NavLink>
                <span className={styles.messageText}>{message}</span>
            </div>
        </div>
    );
});
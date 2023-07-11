import React, {FC, memo} from 'react';
import {ChatMessageType} from '../../../../api/chat-api';
import {NavLink} from 'react-router-dom';
import styles from './Message.module.scss';
import {useTheme} from '../../../../theme/useTheme';
import userLight from '../../../../assets/images/userLight.svg';
import userDark from '../../../../assets/images/userDark.svg';

export const Message: FC<ChatMessageType> = memo(({userId, photo, userName, message}) => {
    const {theme} = useTheme();
    const themeClassName = theme === 'light' ? styles.light : styles.dark;
    const userNoPhoto = theme === 'light' ? userLight : userDark;

    return (
        <div className={`${styles.message} ${themeClassName}`}>
            <NavLink to={`/profile/${userId}`}>
                <img className={styles.userPhoto} src={photo || userNoPhoto} alt=""/>
            </NavLink>

            <div className={styles.messageInfo}>
                <NavLink className={`${styles.userName} ${themeClassName}`} to={`/profile/${userId}`}>
                    <span>{userName}</span>
                </NavLink>
                <span className={`${styles.messageText} ${themeClassName}`}>{message}</span>
            </div>
        </div>
    );
});
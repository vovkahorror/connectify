import React, {FC} from 'react';
import styles from './MessagesListHeader.module.scss';
import {NavLink} from 'react-router-dom';
import userNoPhoto from '../../../../assets/images/user.svg';
import {setTimezoneOffsetDate, toFormatDate, toFormatTime} from '../../../../utils/date-helpers';

const MessagesListHeader: FC<MessagesListHeaderPropsType> = ({userID, userPhoto, userName, lastUserActivityDate}) => {
    const customizedDate = lastUserActivityDate && setTimezoneOffsetDate(lastUserActivityDate);
    const date = customizedDate && toFormatDate(customizedDate);
    const time = customizedDate && toFormatTime(customizedDate);

    return (
        <div className={styles.messagesListHeader}>
            <NavLink className={styles.userName} to={`/profile/${userID}`}>
                <img className={styles.userPhoto} src={userPhoto || userNoPhoto} alt=""/>
            </NavLink>
            <div className={styles.userInfo}>
                <NavLink className={styles.userName} to={`/profile/${userID}`}>
                    <h2 className={styles.userName}>{userName}</h2>
                </NavLink>
                <span className={styles.userActivity}>Was online on {date} at {time}</span>
            </div>
        </div>
    );
};

type MessagesListHeaderPropsType = {
    userID: number;
    userPhoto?: string | null;
    userName?: string;
    lastUserActivityDate?: string;
}

export default MessagesListHeader;
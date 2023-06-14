import React, {FC} from 'react';
import styles from './MessagesListHeader.module.scss';
import {NavLink} from 'react-router-dom';
import userNoPhoto from '../../../../assets/images/user.svg';
import {setTimezoneOffsetDate, toFormatDate, toFormatTime} from '../../../../utils/date-helpers';
import {Paginator} from '../../../common/Paginator/Paginator';

const MessagesListHeader: FC<MessagesListHeaderPropsType> = ({
                                                                 userID,
                                                                 userPhoto,
                                                                 userName,
                                                                 lastUserActivityDate,
                                                                 currentPage,
                                                                 totalCount,
                                                                 pageSize,
                                                                 onPageChanged,
                                                             }) => {
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
            <Paginator currentPage={currentPage} totalItemsCount={totalCount} pageSize={pageSize} portionSize={5}
                       onPageChanged={onPageChanged}/>
        </div>
    );
};

type MessagesListHeaderPropsType = {
    userID: number;
    userPhoto?: string | null;
    userName?: string;
    lastUserActivityDate?: string;
    currentPage: number;
    totalCount: number;
    pageSize: number;
    onPageChanged: (pageNumber: number) => void;
}

export default MessagesListHeader;
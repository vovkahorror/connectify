import React, {FC} from 'react';
import styles from './MessagesListHeader.module.scss';
import {NavLink} from 'react-router-dom';
import userNoPhoto from '../../../../assets/images/userLight.svg';
import {setTimezoneOffsetDate, toFormatDate, toFormatTime} from '../../../../utils/date-helpers';
import {Paginator} from '../../../common/Paginator/Paginator';
import {useTranslation} from 'react-i18next';

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
    const {t, i18n} = useTranslation('dialogs');
    const customizedDate = lastUserActivityDate && setTimezoneOffsetDate(lastUserActivityDate);
    const date = customizedDate && toFormatDate(customizedDate, i18n.language);
    const time = customizedDate && toFormatTime(customizedDate, i18n.language);

    return (
        <div className={styles.messagesListHeader}>
            <NavLink className={styles.userName} to={`/profile/${userID}`}>
                <img className={styles.userPhoto} src={userPhoto || userNoPhoto} alt=""/>
            </NavLink>
            <div className={styles.userInfo}>
                <NavLink className={styles.userName} to={`/profile/${userID}`}>
                    <h2 className={styles.userName}>{userName}</h2>
                </NavLink>
                <span className={styles.userActivity}>{t('wasOnlineOn')} {date} {t('at')} {time}</span>
            </div>
            <div>
                <Paginator currentPage={currentPage} totalItemsCount={totalCount} pageSize={pageSize} portionSize={5}
                           onPageChanged={onPageChanged}/>
            </div>
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
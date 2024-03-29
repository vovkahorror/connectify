import React, {FC} from 'react';
import styles from './MessagesListHeader.module.scss';
import {NavLink} from 'react-router-dom';
import {setTimezoneOffsetDate, toFormatDate, toFormatTime} from '../../../../utils/date-helpers';
import {Paginator} from '../../../common/Paginator/Paginator';
import {useTranslation} from 'react-i18next';
import {useTheme} from '../../../../theme/useTheme';
import userLight from '../../../../assets/images/userLight.svg';
import userDark from '../../../../assets/images/userDark.svg';
import {ReactComponent as BackIcon} from '../../../../assets/icons/backArrow.svg';

const MessagesListHeader: FC<MessagesListHeaderPropsType> = ({
                                                                 userID,
                                                                 userPhoto,
                                                                 userName,
                                                                 lastUserActivityDate,
                                                                 currentPage,
                                                                 totalCount,
                                                                 pageSize,
                                                                 onPageChanged,
                                                                 setIsTransformed,
                                                             }) => {
    const {t, i18n} = useTranslation('dialogs');
    const {theme} = useTheme();
    const themeClassName = theme === 'light' ? styles.light : styles.dark;
    const userNoPhoto = theme === 'light' ? userLight : userDark;
    const customizedDate = lastUserActivityDate && setTimezoneOffsetDate(lastUserActivityDate);
    const date = customizedDate && toFormatDate(customizedDate, i18n.language);
    const time = customizedDate && toFormatTime(customizedDate, i18n.language);

    const onBack = () => setIsTransformed(false);

    return (
        <div className={`${styles.messagesListHeader} ${themeClassName}`}>
            <NavLink className={styles.userName} to={`/profile/${userID}`}>
                <img className={styles.userPhoto} src={userPhoto || userNoPhoto} alt=""/>
            </NavLink>
            <div className={styles.userInfo}>
                <NavLink className={`${styles.userName} ${themeClassName}`} to={`/profile/${userID}`}>
                    <h2 className={styles.userName}>{userName}</h2>
                </NavLink>
                <span
                    className={`${styles.userActivity} ${themeClassName}`}>{t('wasOnlineOn')} {date} {t('at')} {time}</span>
            </div>
            <div className={styles.buttons}>
                <BackIcon className={`${styles.backIcon} ${themeClassName}`} onClick={onBack}/>
                <div>
                    <Paginator currentPage={currentPage} totalItemsCount={totalCount} pageSize={pageSize}
                               portionSize={5}
                               onPageChanged={onPageChanged}/>
                </div>
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
    setIsTransformed: (isTransformed: boolean) => void;
}

export default MessagesListHeader;
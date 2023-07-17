import styles from './DialogItem.module.scss';
import {NavLink} from 'react-router-dom';
import {FC} from 'react';
import {setTimezoneOffsetDate, toFormatDate, toFormatTime} from '../../../../utils/date-helpers';
import {useTranslation} from 'react-i18next';
import {useTheme} from '../../../../theme/useTheme';
import userLight from '../../../../assets/images/userLight.svg';
import userDark from '../../../../assets/images/userDark.svg';

export const DialogItem: FC<DialogItemType> = ({
                                                   userName,
                                                   userPhoto,
                                                   id,
                                                   lastDialogActivityDate,
                                                   newMessagesCount,
                                                   setIsTransformed,
                                               }) => {
    const {i18n} = useTranslation();
    const {theme} = useTheme();
    const themeClassName = theme === 'light' ? styles.light : styles.dark;
    const userNoPhoto = theme === 'light' ? userLight : userDark;
    const path = `/dialogs/${id}`;

    const customizedDate = setTimezoneOffsetDate(lastDialogActivityDate);
    const date = toFormatDate(customizedDate, i18n.language);
    const time = toFormatTime(customizedDate, i18n.language);

    const onClickHandler = () => setIsTransformed(true);

    return (
        <NavLink className={`${styles.dialogItem} ${themeClassName}`} activeClassName={styles.active} to={path}
                 onClick={onClickHandler}>
            <img className={styles.photo} src={userPhoto || userNoPhoto} alt="userPhoto"/>
            <span>{userName}</span>
            <span className={styles.lastActivityDate}>
                <span>{date}</span>
                <span>{time}</span>
            </span>
            {newMessagesCount > 0 && <span className={styles.newMessagesCount}>{newMessagesCount}</span>}
        </NavLink>
    );
};

type DialogItemType = {
    userName: string;
    userPhoto: string | null;
    id: number;
    lastDialogActivityDate: string;
    newMessagesCount: number;
    setIsTransformed: (isTransformed: boolean) => void;
}
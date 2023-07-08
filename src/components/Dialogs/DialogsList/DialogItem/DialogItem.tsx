import styles from './DialogItem.module.scss';
import {NavLink} from 'react-router-dom';
import UserNoPhoto from '../../../../assets/images/user.svg';
import {FC} from 'react';
import {setTimezoneOffsetDate, toFormatDate, toFormatTime} from '../../../../utils/date-helpers';
import {useTranslation} from 'react-i18next';

export const DialogItem: FC<DialogItemType> = ({userName, userPhoto, id, lastDialogActivityDate, newMessagesCount}) => {
    const {i18n} = useTranslation();
    const path = `/dialogs/${id}`;

    const customizedDate = setTimezoneOffsetDate(lastDialogActivityDate);
    const date = toFormatDate(customizedDate, i18n.language);
    const time = toFormatTime(customizedDate, i18n.language);

    return (
        <NavLink className={styles.dialogItem} activeClassName={styles.active} to={path}>
            <img className={styles.photo} src={userPhoto || UserNoPhoto} alt="userPhoto"/>
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
}
import React, {FC} from 'react';
import {DialogItem} from './DialogItem/DialogItem';
import {DialogsPageType} from '../../../redux/dialogs-reducer';
import styles from './DialogsList.module.scss';
import {useTheme} from '../../../theme/useTheme';

const DialogsList: FC<DialogsListPropsType> = ({state, ...props}) => {
    const {theme} = useTheme();
    const themeClassName = theme === 'light' ? styles.light : styles.dark;

    const dialogsElements = state.dialogsData.map(dialog => {
        return <DialogItem key={dialog.id}
                           userName={dialog.userName}
                           userPhoto={dialog.photos.large}
                           lastDialogActivityDate={dialog.lastDialogActivityDate}
                           id={dialog.id}
                           newMessagesCount={dialog.newMessagesCount}
                           {...props}/>;
    });

    return (
        <div className={`${styles.dialogsList} ${themeClassName}`}>
            {dialogsElements}
        </div>
    );
};

type DialogsListPropsType = {
    state: DialogsPageType;
    setIsTransformed: (isTransformed: boolean) => void;
}

export default DialogsList;
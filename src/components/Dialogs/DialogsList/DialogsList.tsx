import React, {FC} from 'react';
import {DialogItem} from './DialogItem/DialogItem';
import {DialogsPageType} from '../../../redux/dialogs-reducer';
import styles from './DialogsList.module.scss';

const DialogsList: FC<DialogsListPropsType> = ({state}) => {
    const dialogsElements = state.dialogsData.map(dialog => {
        return <DialogItem key={dialog.id}
                           userName={dialog.userName}
                           userPhoto={dialog.photos.large}
                           lastDialogActivityDate={dialog.lastDialogActivityDate}
                           id={dialog.id}
                           newMessagesCount={dialog.newMessagesCount}/>;
    });

    return (
        <div className={styles.dialogsList}>
            {dialogsElements}
        </div>
    );
};

type DialogsListPropsType = {
    state: DialogsPageType;
}

export default DialogsList;
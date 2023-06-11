import styles from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsPageType} from '../../redux/dialogs-reducer';
import {AddMessageFormRedux, FormDataType} from './AddMessageForm/AddMessageForm';
import {FC} from 'react';

export const Dialogs: FC<DialogsPropsType> = ({userID, sendMessage, dialogsPage}) => {
    const state = dialogsPage;

    const dialogsElements = state.dialogsData.map(dialog => {
        return <DialogItem key={dialog.id} name={dialog.userName} id={dialog.id}/>;
    });

    const messagesElements = state.messagesData.map(message => {
        return <Message key={message.id} message={message.message}/>;
    });

    const addNewMessage = (values: FormDataType) => {
        sendMessage(userID, values.newMessageBody);
    };

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs__items}>
                {dialogsElements}
            </div>
            <div className={styles.dialogs__messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    );
};

type DialogsPropsType = {
    userID: number;
    sendMessage: (userID: number, newMessageBody: string) => void;
    dialogsPage: DialogsPageType;
}


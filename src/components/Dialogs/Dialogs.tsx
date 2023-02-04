import styles from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsPageType} from '../../redux/dialogs-reducer';
import {AddMessageFormRedux, FormDataType} from './AddMessageForm/AddMessageForm';

type DialogsPropsType = {
    sendMessage: (newMessageBody: string) => void;
    dialogsPage: DialogsPageType;
}

export const Dialogs = (props: DialogsPropsType) => {
    const state = props.dialogsPage;

    const dialogsElements = state.dialogsData.map(dialog => {
        return <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>;
    });

    const messagesElements = state.messagesData.map(message => {
        return <Message key={message.id} message={message.message}/>;
    });

    const addNewMessage = (values: FormDataType) => {
        props.sendMessage(values.newMessageBody);
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


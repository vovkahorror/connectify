import styles from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionsTypes} from "../../redux/store";
import {ChangeEvent} from "react";
import {DialogsPageType, sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {EmptyObject, Store} from "redux";

type DialogsPropsType = {
    store: Store<EmptyObject & { profilePage: never; dialogsPage: never; sidebar: any; }, ActionsTypes>;
}

export const Dialogs = (props: DialogsPropsType) => {
    const state: DialogsPageType = props.store.getState().dialogsPage;

    const dialogsElements = state.dialogsData.map(dialog => {
        return <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>;
    });
    const messagesElements = state.messagesData.map(message => {
        return <Message key={message.id} message={message.message}/>;
    });

    const newMessageBody = state.newMessageBody;
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const body = e.currentTarget.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    };

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs__items}>
                {dialogsElements}
            </div>
            <div className={styles.dialogs__messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                          <textarea
                              value={newMessageBody}
                              onChange={onNewMessageChange}
                              placeholder={'Enter your message'}
                          >
                          </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
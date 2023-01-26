import styles from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ChangeEvent} from "react";
import {DialogsPageType} from "../../redux/dialogs-reducer";

type DialogsPropsType = {
    updateNewMessageBody: (body: string) => void;
    sendMessage: () => void;
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

    const newMessageBody = state.newMessageBody;
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const body = e.currentTarget.value;
        props.updateNewMessageBody(body);
    };
    const onSendMessageClick = () => {
        props.sendMessage();
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
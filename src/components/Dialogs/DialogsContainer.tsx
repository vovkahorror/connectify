import styles from './Dialogs.module.css';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {EmptyObject, Store} from "redux";
import {ActionsTypes, DialogsPageType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";

type DialogsPropsType = {
    store: Store<EmptyObject & { profilePage: never; dialogsPage: never; sidebar: any; }, ActionsTypes>;
}

export const DialogsContainer = (props: DialogsPropsType) => {
    const state: DialogsPageType = props.store.getState().dialogsPage;

    const onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    };

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };

    return (
        <Dialogs
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogsPage={state}
        />
    );
};
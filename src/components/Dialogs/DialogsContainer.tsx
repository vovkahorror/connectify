import styles from './Dialogs.module.css';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import StoreContext from '../../StoreContext';
import {DialogsPageType} from "../../redux/redux-store";

export const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                const state: DialogsPageType = store.getState().dialogsPage;

                const onNewMessageChange = (body: string) => {
                    store.dispatch(updateNewMessageBodyCreator(body));
                };

                const onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator());
                };

                return (
                    <Dialogs
                        updateNewMessageBody={onNewMessageChange}
                        sendMessage={onSendMessageClick}
                        dialogsPage={state}
                    />
                );
            }}
        </StoreContext.Consumer>
    );
};
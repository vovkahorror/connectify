import styles from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../App";

export type DialogsDataType = {
  id: number;
  name: string;
}
export type MessagesDataType = {
  id: number;
  message: string;
}
type DialogsPropsType = {
  dialogsState: DialogsPageType;
}

export const Dialogs = (props: DialogsPropsType) => {
  const dialogsElements = props.dialogsState.dialogsData.map(dialog => {
    return <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>
  });
  const messagesElements = props.dialogsState.messagesData.map(message => {
    return <Message key={message.id} message={message.message}/>
  });

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs__items}>
        {dialogsElements}
      </div>
      <div className={styles.dialogs__messages}>
        {messagesElements}
      </div>
    </div>
  )
}
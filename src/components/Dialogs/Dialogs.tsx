import styles from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

type DialogsDataType = {
  id: number;
  name: string;
}
type MessagesDataType = {
  id: number;
  message: string;
}
type DialogsPropsType = {
  dialogsData: Array<DialogsDataType>;
  messagesData: Array<MessagesDataType>;
}

export const Dialogs = (props: DialogsPropsType) => {
  const dialogsElements = props.dialogsData.map(dialog => {
    return <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>
  });
  const messagesElements = props.messagesData.map(message => {
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
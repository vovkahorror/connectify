import styles from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogItemType = {
  name: string;
  id: number;
}

const DialogItem = (props: DialogItemType) => {
  const path = `/dialogs/${props.id}`;

  return (
    <div className={`${styles.dialog} ${styles.dialog_active}`}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

type MessageType = {
  message: string;
}

const Message = (props: MessageType) => {
  return (
    <div className={styles.message}>{props.message}</div>
  )
}

export const Dialogs = () => {
  const dialogsData = [
    {id: 1, name: 'Nastya'},
    {id: 2, name: 'Vova'},
    {id: 3, name: 'Pavlik'},
    {id: 4, name: 'Natasha'},
    {id: 5, name: 'Sasha'},
    {id: 6, name: 'Nila'},
  ];

  const messagesData = [
    {id: 1, message: 'I\'m OK'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Hi!'},
    {id: 4, message: 'It is my family'},
  ];

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs__items}>
        {dialogsData.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>)}
      </div>
      <div className={styles.dialogs__messages}>
        {messagesData.map(message => <Message key={message.id} message={message.message}/>)}
      </div>
    </div>
  )
}
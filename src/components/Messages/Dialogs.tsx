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
        <DialogItem name={'Nastya'} id={1}/>
        <DialogItem name={'Vova'} id={2}/>
        <DialogItem name={'Pavlik'} id={3}/>
        <DialogItem name={'Natasha'} id={4}/>
        <DialogItem name={'Sasha'} id={5}/>
        <DialogItem name={'Nila'} id={6}/>
      </div>
      <div className={styles.dialogs__messages}>
        <Message message={'I\'m OK'}/>
        <Message message={'How are you?'}/>
        <Message message={'Hi!'}/>
        <Message message={'It is my family'}/>
      </div>
    </div>
  )
}
import styles from "../Dialogs.module.css";

type MessageType = {
  message: string;
}
export const Message = (props: MessageType) => {
  return (
    <div className={styles.message}>{props.message}</div>
  )
}
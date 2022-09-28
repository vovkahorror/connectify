import styles from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemType = {
  name: string;
  id: number;
}

export const DialogItem = (props: DialogItemType) => {
  const path = `/dialogs/${props.id}`;

  return (
    <div className={`${styles.dialog} ${styles.dialog_active}`}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}
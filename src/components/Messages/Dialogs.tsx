import styles from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs__items}>
        <div className={`${styles.dialog} ${styles.dialog_active}`}><NavLink to={'/dialogs/1'}>Nastya</NavLink></div>
        <div className={styles.dialog}><NavLink to={'/dialogs/2'}>Vova</NavLink></div>
        <div className={styles.dialog}><NavLink to={'/dialogs/3'}>Pavlik</NavLink></div>
        <div className={styles.dialog}><NavLink to={'/dialogs/4'}>Natasha</NavLink></div>
        <div className={styles.dialog}><NavLink to={'/dialogs/5'}>Sasha</NavLink></div>
        <div className={styles.dialog}><NavLink to={'/dialogs/6'}>Nila</NavLink></div>
      </div>
      <div className={styles.dialogs__messages}>
        <div className={styles.message}>I'm OK</div>
        <div className={styles.message}>How are you?</div>
        <div className={styles.message}>Hi!</div>
        <div className={styles.message}>It is my family</div>
      </div>
    </div>
  )
}
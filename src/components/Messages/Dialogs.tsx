import styles from './Dialogs.module.css';

export const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs__items}>
        <div className={`${styles.dialog} ${styles.dialog_active}`}>Nastya</div>
        <div className={styles.dialog}>Vova</div>
        <div className={styles.dialog}>Pavlik</div>
        <div className={styles.dialog}>Natasha</div>
        <div className={styles.dialog}>Sasha</div>
        <div className={styles.dialog}>Nila</div>
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
import React from "react";
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.header__img}
           src="https://oir.mobi/uploads/posts/2021-05/1620644854_26-oir_mobi-p-malenkii-morskoi-kotik-zhivotnie-krasivo-f-27.jpg"
           alt=""/>
    </header>
  )
}
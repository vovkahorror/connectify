import React from "react";
import styles from './Nav.module.css';

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.nav__item}><a href="/profile">Profile</a></li>
        <li className={styles.nav__item}><a href="/dialogs">Messages</a></li>
        <li className={styles.nav__item}><a href="/news">News</a></li>
        <li className={styles.nav__item}><a href="/music">Music</a></li>
        <li className={styles.nav__item}><a href="/settings">Settings</a></li>
      </ul>
    </nav>
  )
}
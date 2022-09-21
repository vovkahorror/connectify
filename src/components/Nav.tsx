import React from "react";
import styles from './Nav.module.css';

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.nav__item}><a href="">Profile</a></li>
        <li className={styles.nav__item}><a href="">Messages</a></li>
        <li className={styles.nav__item}><a href="">News</a></li>
        <li className={styles.nav__item}><a href="">Music</a></li>
        <li className={styles.nav__item}><a href="">Settings</a></li>
      </ul>
    </nav>
  )
}
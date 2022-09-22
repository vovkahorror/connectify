import React from "react";
import styles from './Nav.module.css';

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.nav__item}><a href="src/components/Nav/Nav">Profile</a></li>
        <li className={styles.nav__item}><a href="src/components/Nav/Nav">Messages</a></li>
        <li className={styles.nav__item}><a href="src/components/Nav/Nav">News</a></li>
        <li className={styles.nav__item}><a href="src/components/Nav/Nav">Music</a></li>
        <li className={styles.nav__item}><a href="src/components/Nav/Nav">Settings</a></li>
      </ul>
    </nav>
  )
}
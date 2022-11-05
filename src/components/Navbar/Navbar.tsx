import React from "react";
import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.nav__item}><NavLink to="/profile" activeClassName={styles.active}>Profile</NavLink></li>
        <li className={styles.nav__item}><NavLink to="/dialogs" activeClassName={styles.active}>Messages</NavLink></li>
        <li className={styles.nav__item}><NavLink to="/news" activeClassName={styles.active}>News</NavLink></li>
        <li className={styles.nav__item}><NavLink to="/music" activeClassName={styles.active}>Music</NavLink></li>
        <li className={styles.nav__item}><NavLink to="/users" activeClassName={styles.active}>Users</NavLink></li>
        <li className={styles.nav__item}><NavLink to="/settings" activeClassName={styles.active}>Settings</NavLink></li>
      </ul>
    </nav>
  )
}
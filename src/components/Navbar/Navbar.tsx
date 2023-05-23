import React from 'react';
import styles from './Navbar.module.scss';
import {NavLink} from 'react-router-dom';
import {ReactComponent as ProfileIcon} from '../../assets/icons/profile.svg';
import {ReactComponent as MessageIcon} from '../../assets/icons/message.svg';
import {ReactComponent as UsersIcon} from '../../assets/icons/users.svg';
import {ReactComponent as NewsIcon} from '../../assets/icons/newspaper.svg';
import {ReactComponent as MusicIcon} from '../../assets/icons/music.svg';
import {ReactComponent as SettingsIcon} from '../../assets/icons/settings.svg';

export const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <NavLink to="/profile" className={styles.link} activeClassName={styles.active} exact>
                        <ProfileIcon className={styles.icon}/>
                        <span>Profile</span>
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/dialogs" className={styles.link} activeClassName={styles.active}>
                        <MessageIcon className={styles.icon}/>
                        <span>Messages</span>
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/users" className={styles.link} activeClassName={styles.active}>
                        <UsersIcon className={styles.icon}/>
                        <span>Users</span>
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/news" className={styles.link} activeClassName={styles.active}>
                        <NewsIcon className={styles.icon}/>
                        <span>News</span>
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/music" className={styles.link} activeClassName={styles.active}>
                        <MusicIcon className={styles.icon}/>
                        <span>Music</span>
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/settings" className={styles.link} activeClassName={styles.active}>
                        <SettingsIcon className={styles.icon}/>
                        <span>Settings</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};
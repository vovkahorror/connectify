import React, {FC} from 'react';
import styles from './Header.module.scss';
import {NavLink} from 'react-router-dom';
import logo from '../../assets/icons/logo.svg';
import userPhoto from '../../assets/images/user.svg';
import {ReactComponent as LogOutIcon} from '../../assets/icons/logOut.svg';

type HeaderPropsType = {
    isAuth: boolean;
    login: string | null;
    photoLarge?: string | null;
    logout: () => void;
}

export const Header: FC<HeaderPropsType> = ({isAuth, login, photoLarge, logout}) => {
    return (
        <header className={styles.header}>
            <NavLink className={styles.header__title} to="/">
                <img className={styles.logo} src={logo} alt=""/>
                <span>Connectify</span>
            </NavLink>

            {isAuth
                ? <div className={styles.authBlock}>
                    <NavLink className={styles.authBlock__login} to={'/profile'}>{login}</NavLink>
                    <NavLink to={'/profile'}><img className={styles.authBlock__photo} src={photoLarge || userPhoto}
                                                  alt=""/></NavLink>
                    <button className={styles.authBlock__logOut} onClick={logout}>
                        <LogOutIcon/>
                    </button>
                </div>
                : <NavLink to={'/login'}>Log in</NavLink>}
        </header>
    );
};
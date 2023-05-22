import React, {FC} from 'react';
import styles from './Header.module.scss';
import {NavLink} from 'react-router-dom';
import logo from '../../assets/icons/logo.svg';
import userNoPhoto from '../../assets/images/user.svg';
import {ReactComponent as LogOutIcon} from '../../assets/icons/logOut.svg';

export const Header: FC<HeaderPropsType> = ({isAuth, login, photo, logout}) => {
    return (
        <header className={styles.header}>
            <NavLink className={styles.header__title} to="/">
                <img className={styles.logo} src={logo} alt=""/>
                <span>Connectify</span>
            </NavLink>

            {isAuth
                ? <div className={styles.authBlock}>
                    <NavLink className={styles.authBlock__login} to={'/profile'}>{login}</NavLink>
                    <NavLink to={'/profile'}><img className={styles.authBlock__photo} src={photo || userNoPhoto}
                                                  alt=""/></NavLink>
                    <LogOutIcon className={styles.authBlock__logOut} onClick={logout}/>
                </div>
                : <NavLink to={'/login'}>Log in</NavLink>}
        </header>
    );
};

type HeaderPropsType = {
    isAuth: boolean;
    login: string | null;
    photo?: string | null;
    logout: () => void;
}
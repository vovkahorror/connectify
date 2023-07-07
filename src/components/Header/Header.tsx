import React, {FC} from 'react';
import styles from './Header.module.scss';
import {NavLink} from 'react-router-dom';
import logo from '../../assets/icons/logo.svg';
import userNoPhoto from '../../assets/images/user.svg';
import {ReactComponent as LogOutIcon} from '../../assets/icons/logOut.svg';
import {useTranslation} from 'react-i18next';

export const Header: FC<HeaderPropsType> = ({isAuth, login, photo, logout}) => {
    const {i18n} = useTranslation();

    const toggleLanguage = () => i18n.changeLanguage(i18n.language === 'en-GB' ? 'uk-UA' : 'en-GB');

    return (
        <header className={styles.header}>
            <button onClick={toggleLanguage}>change</button>

            <NavLink className={styles.title} to="/">
                <img className={styles.logo} src={logo} alt=""/>
                <span>Connectify</span>
            </NavLink>

            {isAuth
                ? <div className={styles.authBlock}>
                    <NavLink className={styles.login} to={'/profile'}>{login}</NavLink>
                    <NavLink to={'/profile'}><img className={styles.photo} src={photo || userNoPhoto}
                                                  alt=""/></NavLink>
                    <LogOutIcon className={styles.logOut} onClick={logout}/>
                </div>
                : <NavLink className={styles.loginLink} to={'/login'}>Sign In</NavLink>}
        </header>
    );
};

type HeaderPropsType = {
    isAuth: boolean;
    login: string | null;
    photo: string | null;
    logout: () => void;
}
import React, {FC} from 'react';
import styles from './Header.module.scss';
import {NavLink} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/icons/logo.svg';
import userLight from '../../assets/images/userLight.svg';
import userDark from '../../assets/images/userDark.svg';
import {ReactComponent as LogOutIcon} from '../../assets/icons/logOut.svg';
import {useTranslation} from 'react-i18next';
import {useTheme} from '../../theme/useTheme';

export const Header: FC<HeaderPropsType> = ({isAuth, login, photo, logout}) => {
    const {t} = useTranslation('auth');
    const {theme} = useTheme();
    const themeClassName = theme === 'light' ? styles.light : styles.dark;
    const userNoPhoto = theme === 'light' ? userLight : userDark;

    return (
        <header className={styles.header}>
            <NavLink className={`${styles.title} ${themeClassName}`} to="/">
                <Logo className={`${styles.logo} ${themeClassName}`}/>
                <span>Connectify</span>
            </NavLink>

            {isAuth
                ? <div className={styles.authBlock}>
                    <NavLink className={`${styles.login} ${themeClassName}`} to={'/profile'}>{login}</NavLink>
                    <NavLink to={'/profile'}>
                        <img className={styles.photo} src={photo || userNoPhoto} alt=""/>
                    </NavLink>
                    <LogOutIcon className={`${styles.logOut} ${themeClassName}`} onClick={logout}/>
                </div>
                : <NavLink className={`${styles.loginLink} ${themeClassName}`} to={'/login'}>{t('logIn')}</NavLink>}
        </header>
    );
};

type HeaderPropsType = {
    isAuth: boolean;
    login: string | null;
    photo: string | null;
    logout: () => void;
}
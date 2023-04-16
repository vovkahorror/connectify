import React from 'react';
import styles from './Header.module.css';
import {NavLink} from 'react-router-dom';

type HeaderPropsType = {
    isAuth: boolean;
    login: string | null;
    logout: () => void;
}

export const Header = (props: HeaderPropsType) => {
    return (
        <header className={styles.header}>
            <img className={styles.header__img}
                 src="https://oir.mobi/uploads/posts/2021-05/1620644854_26-oir_mobi-p-malenkii-morskoi-kotik-zhivotnie-krasivo-f-27.jpg"
                 alt=""/>
            <div className={styles.loginBlock}>
                {props.isAuth
                    ? <div>{props.login}
                        <button onClick={props.logout}>Logout</button>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};
import React from 'react';
import styles from './Preloader.module.scss';
import {ReactComponent as PreloaderIcon} from '../../../assets/images/preloader.svg';
import {useTheme} from '../../../theme/useTheme';

export const Preloader = () => {
    const {theme} = useTheme();
    const themeClassName = theme === 'light' ? styles.light : styles.dark;

    return (
        <div className={`${styles.preloaderWrapper} ${themeClassName}`}>
            <PreloaderIcon className={`${styles.preloaderImage} ${themeClassName}`}/>
        </div>
    );
};
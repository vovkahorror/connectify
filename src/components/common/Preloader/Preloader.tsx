import React from 'react';
import styles from "./Preloader.module.css";
import preloader from "../../../assets/images/preloader.svg";

export const Preloader = () => {
    return (
        <div className={styles.preloaderWrapper}>
            <img className={styles.preloaderImage} src={preloader} alt=""/>
        </div>
    );
};
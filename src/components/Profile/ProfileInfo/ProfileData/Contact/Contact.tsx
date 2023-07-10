import React, {ReactNode} from 'react';
import styles from './Contact.module.scss';
import {useTheme} from '../../../../../theme/useTheme';

export const Contact = ({contactIcon, contactTitle, contactValue}: ContactPropsType) => {
    const {theme} = useTheme();
    const themeClassName = theme === 'light' ? styles.light : styles.dark;

    return (
        <li>
            <a className={`${styles.contact} ${themeClassName}`} href={contactValue} target={'_blank'} rel="noreferrer">
                {contactIcon} {contactTitle}
            </a>
        </li>
    );
};

type ContactPropsType = {
    contactIcon: ReactNode;
    contactTitle: string;
    contactValue: string;
}
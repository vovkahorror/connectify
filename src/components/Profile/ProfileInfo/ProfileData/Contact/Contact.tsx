import React, {ReactNode} from 'react';
import styles from './Contact.module.scss';

export const Contact = ({contactIcon, contactTitle, contactValue}: ContactPropsType) => {
    return (
        <li>
            <a className={styles.contact} href={contactValue} target={'_blank'} rel="noreferrer">
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
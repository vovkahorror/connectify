import React, {ReactNode} from 'react';

export const Contact = ({contactIcon, contactTitle, contactValue}: ContactPropsType) => {
    return (
        <li><a href={contactValue} target={'_blank'} rel="noreferrer">{contactIcon} {contactTitle}</a></li>
    );
};

type ContactPropsType = {
    contactIcon: ReactNode;
    contactTitle: string;
    contactValue: string;
}
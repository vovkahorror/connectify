import React, {ReactNode} from 'react';

export const Contact = ({contactIcon, contactTitle, contactValue}: ContactPropsType) => {
    return (
        <li>{contactIcon}{contactTitle}: {contactValue}</li>
    );
};

type ContactPropsType = {
    contactIcon: ReactNode;
    contactTitle: string;
    contactValue: string;
}
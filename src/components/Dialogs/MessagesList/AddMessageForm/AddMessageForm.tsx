import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import React, {ChangeEvent, FC, useState} from 'react';
import {Textarea} from '../../../common/FormsControls/FormsControls';
import {ReactComponent as SendIcon} from '../../../../assets/icons/send.svg';
import {ReactComponent as RequestIcon} from '../../../../assets/icons/request.svg';
import styles from './AddMessageForm.module.scss';

const AddMessageForm: FC<InjectedFormProps<FormDataType>> = ({handleSubmit, initialValues: {isRequesting}}) => {
    const [message, setMessage] = useState('');

    const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value.slice(0, 1000));
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.textareaWrapper}>
                <Field component={Textarea} name={'newMessageBody'}
                       placeholder={'Enter your message'} maxLength={1000}
                       onInput={handleInputChange} autoFocus/>
                {message.length > 900 && <span className={styles.counter}>{message.length} / 1000</span>}
            </div>
            <button className={styles.sendButton} disabled={!message.length}>
                {isRequesting ? <RequestIcon className={styles.sendIcon}/> : <SendIcon className={styles.sendIcon}/>}
            </button>
        </form>
    );
};

export type FormDataType = {
    newMessageBody: string;
    isRequesting: boolean;
}

export const AddMessageFormRedux = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm);
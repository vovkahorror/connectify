import React, {FC} from 'react';
import {ContactsProfileAPIType, ProfileAPIType} from '../../../../redux/profile-reducer';
import {InjectedFormProps, reduxForm} from 'redux-form';
import {createField, Input, Textarea} from '../../../common/FormsControls/FormsControls';
import {required} from '../../../../utils/validators/validators';
import controlsStyles from '../../../common/FormsControls/FormsControls.module.css';
import styles from './ProfileDataForm.module.scss';

const ProfileDataForm: FC<InjectedFormProps<ProfileDataFormPropsType>> = ({
                                                                              initialValues: {
                                                                                  disableEditMode,
                                                                                  ...profile
                                                                              },
                                                                              handleSubmit,
                                                                              error,
                                                                          }) => {
    const mappedContacts = Object.keys(profile.contacts as ContactsProfileAPIType).map(key => {
        if (key !== 'vk') {
            return <li key={key} className={styles.contactItem}>
                <span
                    className={styles.contactTitle}>{key}:</span> {createField(`link to ${key}`, `contacts.${key}`, 'text', [], Input)}
            </li>;
        } else {
            return null;
        }
    });

    return (
        <form className={styles.form}>
            {error && <div className={controlsStyles.formSummaryError}>
                {error}
            </div>}
            <div className={styles.formContent}>
                <ul className={styles.formList}>
                    <li>
                        <span className={styles.itemTitle}>Full name:</span>
                        {createField('Your full name', 'fullName', 'text', [required], Input)}
                    </li>
                    <li>
                        <label className={styles.lookingAJob}>
                            <span className={styles.itemTitle}>Looking for a job:</span>
                            {createField('', 'lookingForAJob', 'checkbox', [], Input)}
                        </label>
                    </li>
                    <li>
                        <span className={styles.itemTitle}>My professional skills:</span>
                        {createField('Describe your professional skills', 'lookingForAJobDescription', 'text', [required], Textarea)}
                    </li>
                    <li>
                        <span className={styles.itemTitle}>About me:</span>
                        {createField('Tell a bit about yourself', 'aboutMe', 'text', [required], Textarea)}
                    </li>
                </ul>
                <div className={styles.contactsBlock}>
                    <span className={styles.itemTitle}>Contacts:</span>
                    <ul className={styles.contactsList}>
                        {mappedContacts}
                    </ul>
                </div>
            </div>
            <div className={styles.buttonsBlock}>
                <button className={styles.cancelButton} onClick={disableEditMode} type={'button'}>Cancel</button>
                <button className={styles.submitButton} onClick={handleSubmit}>Save</button>
            </div>
        </form>
    );
};

type ProfileDataFormPropsType = ProfileAPIType & {
    disableEditMode: () => void;
}

export const ProfileDataFormRedux = reduxForm<ProfileDataFormPropsType>({form: 'edit-profile'})(ProfileDataForm);
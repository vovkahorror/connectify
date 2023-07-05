import React, {FC} from 'react';
import {ContactsProfileAPIType, ProfileAPIType} from '../../../../redux/profile-reducer';
import {InjectedFormProps, reduxForm} from 'redux-form';
import {createField, Input, Textarea} from '../../../common/FormsControls/FormsControls';
import {required} from '../../../../utils/validators/validators';
import controlsStyles from '../../../common/FormsControls/FormsControls.module.scss';
import styles from './ProfileDataForm.module.scss';
import {useTranslation} from 'react-i18next';

const ProfileDataForm: FC<InjectedFormProps<ProfileDataFormPropsType>> = ({
                                                                              initialValues: {
                                                                                  disableEditMode,
                                                                                  ...profile
                                                                              },
                                                                              handleSubmit,
                                                                              error,
                                                                          }) => {
    const {t} = useTranslation('profile');

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
                        <span className={styles.itemTitle}>{t('fullName')}:</span>
                        {createField(t('yourFullName'), 'fullName', 'text', [required], Input)}
                    </li>
                    <li>
                        <label className={styles.lookingAJob}>
                            <span className={styles.itemTitle}>{t('lookingForAJob')}:</span>
                            {createField('', 'lookingForAJob', 'checkbox', [], Input)}
                        </label>
                    </li>
                    <li>
                        <span className={styles.itemTitle}>{t('lookingForAJobDescription')}:</span>
                        {createField('Describe your professional skills', 'lookingForAJobDescription', 'text', [required], Textarea)}
                    </li>
                    <li>
                        <span className={styles.itemTitle}>{t('aboutMe')}:</span>
                        {createField('Tell a bit about yourself', 'aboutMe', 'text', [required], Textarea)}
                    </li>
                </ul>
                <div className={styles.contactsBlock}>
                    <span className={styles.itemTitle}>{t('contacts')}:</span>
                    <ul className={styles.contactsList}>
                        {mappedContacts}
                    </ul>
                </div>
            </div>
            <div className={styles.buttonsBlock}>
                <button className={styles.cancelButton} onClick={disableEditMode} type={'button'}>{t('cancel')}</button>
                <button className={styles.submitButton} onClick={handleSubmit}>{t('save')}</button>
            </div>
        </form>
    );
};

type ProfileDataFormPropsType = ProfileAPIType & {
    disableEditMode: () => void;
}

export const ProfileDataFormRedux = reduxForm<ProfileDataFormPropsType>({form: 'edit-profile'})(ProfileDataForm);
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import React, {FC} from 'react';
import {Textarea} from '../../../common/FormsControls/FormsControls';
import styles from './AddNewPostForm.module.scss';
import userNoPhoto from '../../../../assets/images/user.svg';
import {useTranslation} from 'react-i18next';

const AddNewPostForm: FC<InjectedFormProps<FormDataType>> = ({initialValues: {userPhoto}, handleSubmit, form}) => {
    const {t} = useTranslation('profile');

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.messageBlock}>
                <img className={styles.userPhoto} src={userPhoto || userNoPhoto} alt=""/>
                <Field className={styles.message} component={Textarea} name={'newPostText'}
                       placeholder={t('addPostPlaceholder')}/>
            </div>
            <button className={styles.button} disabled={!form.length}>{t('post')}</button>
        </form>
    );
};

export type FormDataType = {
    newPostText: string;
    userPhoto?: string | null;
}

export const AddNewPostFormRedux = reduxForm<FormDataType>({form: 'profileAddPostForm'})(AddNewPostForm);
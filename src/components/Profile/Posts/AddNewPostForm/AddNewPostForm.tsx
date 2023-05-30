import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import React, {FC} from 'react';
import {Textarea} from '../../../common/FormsControls/FormsControls';
import styles from './AddNewPostForm.module.scss';
import userNoPhoto from '../../../../assets/images/user.svg';

const AddNewPostForm: FC<InjectedFormProps<FormDataType>> = ({initialValues: {userPhoto}, handleSubmit, form}) => {
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.messageBlock}>
                <img className={styles.userPhoto} src={userPhoto || userNoPhoto} alt=""/>
                <Field className={styles.message} component={Textarea} name={'newPostText'}
                       placeholder={'Write a post'}/>
            </div>
            <button className={styles.button} disabled={!form.length}>Publish a post</button>
        </form>
    );
};

export type FormDataType = {
    newPostText: string;
    userPhoto?: string | null;
}

export const AddNewPostFormRedux = reduxForm<FormDataType>({form: 'profileAddPostForm'})(AddNewPostForm);
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import React, {FC} from 'react';

export type FormDataType = {
    newPostText: string;
}

const AddNewPostForm: FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newPostText'}/>
            </div>
            <button>Add post</button>
        </form>
    );
};

export const AddNewPostFormRedux = reduxForm<FormDataType>({form: 'profileAddPostForm'})(AddNewPostForm);
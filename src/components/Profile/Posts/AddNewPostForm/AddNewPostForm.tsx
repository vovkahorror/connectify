import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import React, {FC} from 'react';
import {maxLengthCreator, required} from '../../../../utils/validators/validators';
import {Textarea} from '../../../common/FormsControls/FormsControls';

export type FormDataType = {
    newPostText: string;
}

const maxLength70 = maxLengthCreator(70);

const AddNewPostForm: FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={'newPostText'} validate={[required, maxLength70]}
                       placeholder={'Post message'}/>
            </div>
            <button>Add post</button>
        </form>
    );
};

export const AddNewPostFormRedux = reduxForm<FormDataType>({form: 'profileAddPostForm'})(AddNewPostForm);
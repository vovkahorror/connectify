import {Field, Validator, WrappedFieldProps} from 'redux-form';
import styles from './FormsControls.module.css';
import React, {FC, ReactNode} from 'react';

type FormControlType = WrappedFieldProps & {
    children: ReactNode;
}

const FormControl: FC<FormControlType> = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error;

    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>{children}</div>
            {hasError && <span>{error}</span>}
        </div>
    );
};

export const Textarea = (props: WrappedFieldProps) => {
    const {input, meta, ...restProps} = props;

    return (
        <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
    );
};

export const Input = (props: WrappedFieldProps) => {
    const {input, meta, ...restProps} = props;

    return (
        <FormControl {...props}><input {...input} {...restProps}/></FormControl>
    );
};

export const createField = (placeholder: string, name: string, type: string, validators: Validator[], component: ReactNode, props = {}) => {
    return (
        <Field placeholder={placeholder} name={name} type={type} validate={validators}
               component={component} {...props}/>
    );
};
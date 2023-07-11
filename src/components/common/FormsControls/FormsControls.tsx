import {Field, Validator, WrappedFieldProps} from 'redux-form';
import styles from './FormsControls.module.scss';
import React, {FC, ReactNode} from 'react';
import TextArea from 'antd/es/input/TextArea';
import {useTheme} from '../../../theme/useTheme';

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
    const {theme} = useTheme();
    const themeClassName = theme === 'light' ? styles.light : styles.dark;

    return (
        <FormControl {...props}>
            <TextArea className={`${styles.input} ${themeClassName}`}  {...input} {...restProps}/>
        </FormControl>
    );
};

export const Input = (props: WrappedFieldProps) => {
    const {input, meta, ...restProps} = props;
    const {theme} = useTheme();
    const themeClassName = theme === 'light' ? styles.light : styles.dark;

    return (
        <FormControl {...props}>
            <input className={`${styles.input} ${themeClassName}`} {...input} {...restProps}/>
        </FormControl>
    );
};

export const createField = (placeholder: string, name: string, type: string, validators: Validator[], component: ReactNode, autocomplete?: string, props = {}) => {
    return (
        <Field placeholder={placeholder} name={name} type={type} validate={validators}
               component={component} autoComplete={autocomplete} {...props}/>
    );
};
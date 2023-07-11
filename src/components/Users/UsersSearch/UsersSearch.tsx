import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import {useDebounce} from 'usehooks-ts';
import styles from './UsersSearch.module.scss';
import {ReactComponent as SearchIcon} from '../../../assets/icons/search.svg';
import {ReactComponent as XmarkIcon} from '../../../assets/icons/xmark.svg';
import {useTranslation} from 'react-i18next';
import {useTheme} from '../../../theme/useTheme';

export const UsersSearch: FC<UsersSearchPropsType> = ({nameSearch, onlyFollowed, setNameSearch, setOnlyFollowed}) => {
    const {t} = useTranslation('users');
    const [value, setValue] = useState<string>(nameSearch);
    const debouncedValue = useDebounce<string>(value, 500);
    const [checked, setChecked] = useState<boolean | null>(onlyFollowed);
    const {theme} = useTheme();
    const themeClassName = theme === 'light' ? styles.light : styles.dark;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value);
    };

    const clearInput = () => {
        setValue('');
    };

    const handleChecked = (event: ChangeEvent<HTMLInputElement>) => {
        setChecked(event.currentTarget.checked);
    };

    useEffect(() => {
        setNameSearch(debouncedValue);
    }, [setNameSearch, debouncedValue]);

    useEffect(() => {
        setOnlyFollowed(checked ? true : null);
    }, [checked, setOnlyFollowed]);

    return (
        <div className={styles.searchPanel}>
            <div className={styles.search}>
                <input className={`${styles.input} ${themeClassName}`} type="text" value={value}
                       placeholder={t('enterNameToSearch')}
                       onChange={handleChange}/>
                <SearchIcon className={`${styles.searchIcon} ${themeClassName}`}/>
                {value && <XmarkIcon className={`${styles.xmarkIcon} ${themeClassName}`} onClick={clearInput}/>}
            </div>
            <label className={styles.onlyFollowed}>
                <input className={`${styles.checkbox} ${themeClassName}`} type="checkbox" checked={!!checked}
                       onChange={handleChecked}/>
                <span className={`${styles.text} ${themeClassName}`}>{t('showOnlySubscribed')}</span>
            </label>
        </div>

    );
};

type  UsersSearchPropsType = {
    nameSearch: string;
    onlyFollowed: boolean | null;
    setNameSearch: (nameSearch: string) => void;
    setOnlyFollowed: (onlyFollowed: boolean | null) => void;
}
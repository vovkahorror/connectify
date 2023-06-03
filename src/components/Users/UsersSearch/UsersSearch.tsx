import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import {useDebounce} from 'usehooks-ts';
import styles from './UsersSearch.module.scss';
import {ReactComponent as SearchIcon} from '../../../assets/icons/search.svg';
import {ReactComponent as XmarkIcon} from '../../../assets/icons/xmark.svg';

export const UsersSearch: FC<UsersSearchPropsType> = ({nameSearch, onlyFollowed, setNameSearch, setOnlyFollowed}) => {
    const [value, setValue] = useState<string>(nameSearch);
    const debouncedValue = useDebounce<string>(value, 500);
    const [checked, setChecked] = useState<boolean | null>(onlyFollowed);

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
                <input className={styles.input} type="text" value={value} placeholder={'Enter a name to search'}
                       onChange={handleChange}/>
                <SearchIcon className={styles.searchIcon}/>
                {value && <XmarkIcon className={styles.xmarkIcon} onClick={clearInput}/>}
            </div>
            <label className={styles.onlyFollowed}>
                <input type="checkbox" checked={!!checked} onChange={handleChecked}/>
                <span>Show only users I follow</span>
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
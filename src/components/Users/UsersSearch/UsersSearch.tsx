import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import {useDebounce} from 'usehooks-ts';
import styles from './UsersSearch.module.scss';
import {ReactComponent as SearchIcon} from '../../../assets/icons/search.svg';
import {ReactComponent as XmarkIcon} from '../../../assets/icons/xmark.svg';

export const UsersSearch: FC<UsersSearchPropsType> = ({nameSearch, setNameSearch}) => {
    const [value, setValue] = useState<string>(nameSearch);
    const debouncedValue = useDebounce<string>(value, 500);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value);
    };

    const clearInput = () => {
        setValue('');
    };

    useEffect(() => {
        setNameSearch(debouncedValue);
    }, [setNameSearch, debouncedValue]);

    return (
        <div className={styles.search}>
            <input className={styles.input} type="text" value={value} placeholder={'Enter a name to search'}
                   onChange={handleChange}/>
            <SearchIcon className={styles.searchIcon}/>
            {value && <XmarkIcon className={styles.xmarkIcon} onClick={clearInput}/>}
        </div>
    );
};

type  UsersSearchPropsType = {
    nameSearch: string;
    setNameSearch: (nameSearch: string) => void;
}
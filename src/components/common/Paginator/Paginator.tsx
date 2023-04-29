import styles from './Paginator.module.css';
import React from 'react';

export const Paginator = ({currentPage, totalUsersCount, pageSize, onPageChanged}: PaginatorPropsType) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {pages.map(page => {
                return (
                    <span
                        className={styles.pageNumber + ' ' + (currentPage === page ? styles.selectedPageNumber : '')}
                        onClick={() => onPageChanged(page)}
                    >{page}</span>
                );
            })}
        </div>
    );
};

type PaginatorPropsType = {
    currentPage: number;
    totalUsersCount: number;
    pageSize: number;
    onPageChanged: (pageNumber: number) => void;
}
import styles from './Paginator.module.css';
import React, {useState} from 'react';
import {v1} from 'uuid';
import classNames from 'classnames';

export const Paginator = ({
                              currentPage,
                              totalItemsCount,
                              pageSize,
                              onPageChanged,
                              portionSize = 20,
                          }: PaginatorPropsType) => {
    const pagesCount = Math.ceil(totalItemsCount / pageSize);
    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage / portionSize));
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={styles.paginator}>
            <button disabled={portionNumber === 1} onClick={() => setPortionNumber(1)}>{'<---'}</button>
            <button disabled={portionNumber === 1} onClick={() => setPortionNumber(portionNumber - 1)}>{'<--'}</button>

            {pages
                .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                .map(page => {
                    return (
                        <span key={v1()}
                              className={classNames(styles.pageNumber, {[styles.selectedPageNumber]: currentPage === page})}
                              onClick={() => onPageChanged(page)}
                        >{page}</span>
                    );
                })}

            <button disabled={portionNumber === portionCount}
                    onClick={() => setPortionNumber(portionNumber + 1)}>{'-->'}</button>
            <button disabled={portionNumber === portionCount}
                    onClick={() => setPortionNumber(portionCount)}>{'--->'}</button>
        </div>
    );
};

type PaginatorPropsType = {
    currentPage: number;
    totalItemsCount: number;
    pageSize: number;
    onPageChanged: (pageNumber: number) => void;
    portionSize?: number;
}
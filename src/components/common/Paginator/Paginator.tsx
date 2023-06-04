import styles from './Paginator.module.scss';
import React, {useEffect, useState} from 'react';
import {v1} from 'uuid';
import classNames from 'classnames';
import {ReactComponent as ArrowLeft} from '../../../assets/icons/arrowLeft.svg';
import {ReactComponent as ArrowRight} from '../../../assets/icons/arrowRight.svg';
import {ReactComponent as ArrowLeftDouble} from '../../../assets/icons/arrowLeftDouble.svg';
import {ReactComponent as ArrowRightDouble} from '../../../assets/icons/arrowRightDouble.svg';

export const Paginator = ({
                              currentPage,
                              totalItemsCount,
                              pageSize,
                              onPageChanged,
                              portionSize = 20,
                          }: PaginatorPropsType) => {
    const pagesCount = Math.ceil(totalItemsCount / pageSize);
    const initialPortionNumber = Math.ceil(currentPage / portionSize);
    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(initialPortionNumber);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    useEffect(() => {
        setPortionNumber(initialPortionNumber);
    }, [initialPortionNumber]);

    return (
        <div className={styles.paginator}>
            <div className={styles.buttonsBlock}>
                <button className={styles.navigationButton} disabled={portionNumber === 1 || !totalItemsCount}
                        onClick={() => setPortionNumber(1)}><ArrowLeftDouble/></button>
                <button className={styles.navigationButton} disabled={portionNumber === 1 || !totalItemsCount}
                        onClick={() => setPortionNumber(portionNumber - 1)}><ArrowLeft/>
                </button>
            </div>

            <div className={styles.pageNumbersBlock}>
                {pages.filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                    .map(page => {
                        return (
                            <span key={v1()}
                                  className={classNames(styles.pageNumber, {[styles.selectedPageNumber]: currentPage === page})}
                                  onClick={() => onPageChanged(page)}
                            >{page}</span>
                        );
                    })}
            </div>

            <div className={styles.buttonsBlock}>
                <button className={styles.navigationButton}
                        disabled={portionNumber === portionCount || !totalItemsCount}
                        onClick={() => setPortionNumber(portionNumber + 1)}><ArrowRight/></button>
                <button className={styles.navigationButton}
                        disabled={portionNumber === portionCount || !totalItemsCount}
                        onClick={() => setPortionNumber(portionCount)}><ArrowRightDouble/></button>
            </div>
        </div>
    )
        ;
};

type PaginatorPropsType = {
    currentPage: number;
    totalItemsCount: number;
    pageSize: number;
    onPageChanged: (pageNumber: number) => void;
    portionSize?: number;
}
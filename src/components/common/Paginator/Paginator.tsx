import s from './Paginator.module.css';
import React, {useState} from 'react';
import cn from 'classnames'
import {inspect} from 'util';

type PaginatorPropsType = {
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize: number
}

export const Paginator: React.FC<PaginatorPropsType> = ({
                                                            pageSize,
                                                            totalUsersCount,
                                                            currentPage,
                                                            onPageChanged,
                                                            portionSize= 5
                                                        }) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div>
            {portionNumber > 1 &&
            <button onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <span key={p} className={ cn({
                        [s.selectedPage]: currentPage === p
                    }, s.pageNumber)} onClick={(e) => onPageChanged(p)}>{p}</span>
                }
            )}
            {portionCount > portionNumber &&
            <button onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>}
        </div>
    )
}
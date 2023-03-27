import React, { ReactElement } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/store';
import { articleSelector } from '../../store/article/selector';
import { setOffset } from '../../store/article/slice';
import style from './pagination.module.css';

const Pagination = () => {
  const dispatch = useAppDispatch();
  const { limit, offset, articlesCount } = useAppSelector(articleSelector);

  const totalPages = Math.ceil(articlesCount / limit);
  // const pages = Array(totalPages)
  //   .fill(1, totalPages)
  //   .map((_, index) => index + 1);

  

  const currentPage = Math.ceil((offset + limit) / limit);

  const goToPage = (page: number) => {
    dispatch(setOffset((page - 1) * limit));
  };

  const renderPagination = () => {
    let number: Array<ReactElement> = [];
    for (let i = 1; i < totalPages; i++) {
      number.push(
        <button
          type="button"
          disabled={currentPage === i}
          className={style.paginationActive}
          key={i}
          onClick={() => goToPage(i)}
        >
          {i}
        </button>,
      );
    }
    return number;
  };

  return (
    <div className={style.pagination}>
      {renderPagination().map(button => button)}
      {/* {pages.map(page => (
        <button
          type="button"
          disabled={currentPage === page + 1}
          className={style.paginationActive}
          key={page}
          onClick={() => goToPage(page + 1)}
        >
          {page}
        </button>
      ))} */}
    </div>
  );
};

export default Pagination;

import React from 'react';
import style from './pagination.module.css';

const Pagination = ({ limit, articlesCount, handlePagination }) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(articlesCount / limit); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className={style.pagination}>
      {pageNumbers.map(number => (
        <button
          type="button"
          className={style.paginationActive}
          key={number}
          onClick={handlePagination}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;

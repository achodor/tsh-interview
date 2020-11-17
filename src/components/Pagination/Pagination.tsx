import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { PaginationProps } from './Pagination.type';
import styles from './pagination.module.css';

const Pagination = ({
  meta,
  search,
  updateProductsSearch,
}: PaginationProps) => {
  const paginationPartLength = 3;
  const paginationFirstPageClasses = clsx(
    styles.paginationFirstPage,
    Number(meta.currentPage) === 1 && styles.paginationDisable
  );
  const paginationLastPageClasses = clsx(
    styles.paginationLastPage,
    Number(meta.currentPage) === meta.totalPages && styles.paginationDisable
  );

  const paginationPageClasses = (page: number) => {
    return clsx(
      styles.paginationPage,
      Number(meta.currentPage) === page && styles.paginationActivePage
    );
  };

  const firstPaginationPart = (): number[] => {
    const currentPage = Number(meta.currentPage);
    if (currentPage === 1) {
      return [currentPage, currentPage + 1, currentPage + 2];
    }

    if (currentPage >= meta.totalPages - paginationPartLength) {
      return [1, 2, 3];
    }

    return [currentPage - 1, currentPage, currentPage + 1];
  };

  const secondPaginationPart = (): number[] => {
    const currentPage = Number(meta.currentPage);
    if (
      currentPage === meta.totalPages ||
      currentPage < meta.totalPages - paginationPartLength
    ) {
      return [meta.totalPages - 2, meta.totalPages - 1, meta.totalPages];
    }

    return [currentPage - 1, currentPage, currentPage + 1];
  };

  const handlePageChange = (page: number) => {
    if (search.page === page) {
      return;
    }

    updateProductsSearch({ ...search, page: page });
    window.scrollTo(0, 0);
  };

  const shouldShowPaginationDivider =
    secondPaginationPart()[0] -
      firstPaginationPart()[firstPaginationPart().length - 1] >
    1;

  return (
    <section className={styles.paginationWrapper}>
      <nav className={styles.pagination}>
        <button
          className={paginationFirstPageClasses}
          onClick={() => handlePageChange(1)}
        >
          First
        </button>
        {firstPaginationPart().map((page) => (
          <button
            key={page}
            className={paginationPageClasses(page)}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
        {shouldShowPaginationDivider ? <span>...</span> : ''}
        {secondPaginationPart().map((page) => (
          <button
            key={page}
            className={paginationPageClasses(page)}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
        <button
          className={paginationLastPageClasses}
          onClick={() => handlePageChange(meta.totalPages)}
        >
          Last
        </button>
      </nav>
    </section>
  );
};

Pagination.propTypes = {
  meta: PropTypes.object.isRequired,
  search: PropTypes.object.isRequired,
  updateProductsSearch: PropTypes.func.isRequired,
};

export default Pagination;

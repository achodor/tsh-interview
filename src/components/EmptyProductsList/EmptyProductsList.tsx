import React from 'react';

import styles from './emptyProductsList.module.css';
import emptyList from 'assets/empty_list.svg';

const EmptyProductsList = () => {
  return (
    <section className={styles.emptyProductsListWrapper}>
      <article className={styles.emptyProductsListBox}>
        <img src={emptyList} alt="Empty list" />
        <h2>Ooops… It’s empty here</h2>
        <p>There are no products on the list</p>
      </article>
    </section>
  );
};

export default EmptyProductsList;

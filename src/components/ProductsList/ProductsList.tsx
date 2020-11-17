import React from 'react';
import PropTypes from 'prop-types';

import { ProductsListProps } from './ProductsList.type';
import styles from './productsList.module.css';
import Product from 'components/Product/Product';

const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <section className={styles.products}>
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </section>
  );
};

ProductsList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductsList;

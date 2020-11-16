import React from 'react';
import PropTypes from 'prop-types';

import styles from './productsList.module.css';
import { Product as ProductType } from 'api/types/Product.type';
import Product from 'components/Product/Product';

type ProductsListProps = {
  products: ProductType[];
};

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

import React from 'react';

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

export default ProductsList;

import React from 'react';

import styles from './product.module.css';
import { Product as ProductType } from 'api/types/Product.type';
import Button from 'components/Button/Button';
import ProductRating from 'components/ProductRating/ProductRating';

type ProductProps = {
  product: ProductType;
};

const Product = ({ product }: ProductProps) => {
  return (
    <article className={styles.product}>
      <div
        className={styles.productPhoto}
        style={{ backgroundImage: `url(${product.image})` }}
      >
        {product.promo ? <div className={styles.productPromo}>Promo</div> : ''}
      </div>
      <div className={styles.productContent}>
        <h3 className={styles.productName}>{product.name}</h3>
        <p className={styles.productDescription}>{product.description}</p>
        <ProductRating
          className={styles.productRating}
          rating={product.rating}
        />
        {product.active ? (
          <Button className={styles.productButton}>Show details</Button>
        ) : (
          <Button className={styles.productButton} disabled>
            Unavailable
          </Button>
        )}
      </div>
    </article>
  );
};

export default Product;

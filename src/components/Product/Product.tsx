import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ProductProps } from './Product.type';
import styles from './product.module.css';
import Button from 'components/Button/Button';
import ProductRating from 'components/ProductRating/ProductRating';
import ProductModal from 'components/ProductModal/ProductModal';

const Product = ({ product }: ProductProps) => {
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);

  const handleModalStateChange = (state: boolean) => {
    setIsProductModalOpen(state);
    if (state) {
      document.body.style.overflow = 'hidden';
      return;
    }

    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <article className={styles.product}>
        <div
          className={styles.productPhoto}
          style={{ backgroundImage: `url(${product.image})` }}
        >
          {product.promo ? (
            <div className={styles.productPromo}>Promo</div>
          ) : (
            ''
          )}
        </div>
        <div className={styles.productContent}>
          <h3 className={styles.productName}>{product.name}</h3>
          <p className={styles.productDescription}>{product.description}</p>
          <ProductRating
            className={styles.productRating}
            rating={product.rating}
          />
          {product.active ? (
            <Button
              className={styles.productButton}
              onClick={() => handleModalStateChange(true)}
            >
              Show details
            </Button>
          ) : (
            <Button className={styles.productButton} disabled>
              Unavailable
            </Button>
          )}
        </div>
      </article>
      {isProductModalOpen ? (
        <ProductModal
          product={product}
          closeCallback={handleModalStateChange}
        />
      ) : (
        ''
      )}
    </>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;

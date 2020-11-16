import React from 'react';

import styles from './productModal.module.css';
import { Product } from 'api/types/Product.type';
import close from 'assets/close.svg';

type ProductProps = {
  product: Product;
  closeCallback: Function;
};

const ProductModal = ({ product, closeCallback }: ProductProps) => {
  return (
    <>
      <div className={styles.productModalWrapper}>
        <div className={styles.productModal}>
          <div
            className={styles.productModalPhoto}
            style={{ backgroundImage: `url(${product.image})` }}
          >
            <button
              className={styles.productModalClose}
              onClick={() => closeCallback(false)}
            >
              <img src={close} alt="Close" />
            </button>
            {product.promo ? (
              <div className={styles.productModalPromo}>Promo</div>
            ) : (
              ''
            )}
          </div>
          <div className={styles.productModalContent}>
            <h3 className={styles.productModalName}>{product.name}</h3>
            <p className={styles.productModaltDescription}>
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductModal;

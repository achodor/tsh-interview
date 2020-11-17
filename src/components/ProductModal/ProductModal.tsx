import React from 'react';
import PropTypes from 'prop-types';

import { ProductModalProps } from 'components/ProductModal/ProductModal.type';
import styles from './productModal.module.css';
import close from 'assets/close.svg';

const ProductModal = ({ product, closeCallback }: ProductModalProps) => {
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

ProductModal.propTypes = {
  product: PropTypes.object.isRequired,
  closeCallback: PropTypes.func.isRequired,
};

export default ProductModal;

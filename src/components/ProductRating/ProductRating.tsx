import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import styles from './productRating.module.css';
import { ReactComponent as Star } from 'assets/star.svg';
import { ReactComponent as StarBorder } from 'assets/star_border.svg';

type ProductRatingProps = {
  rating: number;
  className?: string;
};

const ProductRating = ({ rating, className }: ProductRatingProps) => {
  const maxRating = 5;
  return (
    <div className={clsx(styles.rating, className)}>
      {Array.from(Array(rating).keys()).map((key) => (
        <Star key={key} className={styles.filledStar} />
      ))}
      {Array.from(Array(maxRating - rating).keys()).map((key) => (
        <StarBorder key={key} className={styles.borderStar} />
      ))}
    </div>
  );
};

ProductRating.propTypes = {
  rating: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default ProductRating;

import React from 'react';
import PropTypes from 'prop-types';

import styles from './customCheckbox.module.css';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const CustomCheckbox = ({ label, ...props }: CheckboxProps) => {
  return (
    <label className={styles.customCheckboxLabel}>
      <input
        {...props}
        className={styles.customCheckboxInput}
        type="checkbox"
      />
      <span className={styles.customCheckbox}></span>
      {label}
    </label>
  );
};

CustomCheckbox.propTypes = {
  label: PropTypes.string.isRequired,
};

export default CustomCheckbox;

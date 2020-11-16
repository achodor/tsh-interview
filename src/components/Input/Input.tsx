import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import styles from './input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: string;
  iconAlt?: string;
  className?: string;
}

const Input = ({ label, icon, iconAlt, className, ...props }: InputProps) => {
  return (
    <>
      {icon ? (
        <div className={clsx(styles.inputWithIcon, className)}>
          <input {...props} className={styles.input} />
          <img className={styles.inputIcon} src={icon} alt={iconAlt} />
        </div>
      ) : label ? (
        <label className={styles.inputLabel}>
          {label}
          <input {...props} className={clsx(styles.input, className)} />
        </label>
      ) : (
        <input {...props} className={clsx(styles.input, className)} />
      )}
    </>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  iconAlt: PropTypes.string,
  className: PropTypes.string,
};

export default Input;

import React from 'react';
import clsx from 'clsx';

import styles from './input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: string;
  iconAlt?: string;
  className?: string;
}

const Input = ({ icon, iconAlt, className, ...props }: InputProps) => {
  return (
    <>
      {icon ? (
        <div className={clsx(styles.inputWithIcon, className)}>
          <input {...props} className={styles.input} />
          <img className={styles.inputIcon} src={icon} alt={iconAlt} />
        </div>
      ) : (
        <input {...props} className={clsx(styles.input, className)} />
      )}
    </>
  );
};

export default Input;

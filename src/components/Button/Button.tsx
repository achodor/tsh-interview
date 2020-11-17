import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { ButtonProps } from './Button.interface';
import styles from './button.module.css';

const Button = ({ className, outline, disabled, ...props }: ButtonProps) => {
  const classNames = clsx(
    styles.button,
    className,
    outline && styles.buttonOutline,
    disabled && styles.buttonDisabled
  );

  return <button {...props} className={classNames} />;
};

Button.propTypes = {
  outline: PropTypes.bool,
};

export default Button;

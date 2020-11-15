import React from 'react';
import clsx from 'clsx';

import styles from './button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  outline?: boolean;
}

const Button = ({ className, outline, disabled, ...props }: ButtonProps) => {
  const classNames = clsx(
    styles.button,
    className,
    outline && styles.buttonOutline,
    disabled && styles.buttonDisabled
  );

  return <button {...props} className={classNames} />;
};

export default Button;

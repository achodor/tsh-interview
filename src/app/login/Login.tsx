import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import React from 'react';

import styles from './login.module.css';
import logo from 'assets/logo.svg';
import loginBg from 'assets/login_bg.png';

export const Login = () => {
  return (
    <div className={styles.loginWrapper}>
      <div
        className={styles.loginBackground}
        style={{ backgroundImage: `url(${loginBg})` }}
      ></div>
      <div className={styles.login}>
        <div className={styles.loginLogo}>
          <img src={logo} alt="join.tsh.io" />
        </div>
        <div className={styles.loginFormWrapper}>
          <h2 className={styles.loginHeader}>Login</h2>
          <form>
            <div className={styles.loginElement}>
              <Input
                className={styles.loginFormElement}
                type="text"
                placeholder="Username"
                label="Username"
              />
            </div>
            <div className={styles.loginElement}>
              <Input
                className={styles.loginFormElement}
                type="password"
                placeholder="Password"
                label="Password"
              />
            </div>
            <Button className={styles.loginFormButton} type="submit">
              Log in
            </Button>
            <a href="/login" className={styles.loginForgotPassword}>
              Forgot password?
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

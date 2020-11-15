import React from 'react';

import styles from './header.module.css';
import logo from '../../assets/logo.svg';
import search from '../../assets/search.svg';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import CustomCheckbox from 'components/CustomCheckbox/CustomCheckbox';

const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.headerLogo} src={logo} alt="join.tsh.io" />
      <Button className={styles.headerButton} outline>
        Log in
      </Button>
      <Input
        className={styles.headerSearch}
        type="text"
        placeholder="Search"
        icon={search}
        iconAlt="search"
      />
      <div className={styles.headerFilters}>
        <CustomCheckbox label="Active" />
        <CustomCheckbox label="Promo" />
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import PropTypes from 'prop-types';

import { HeadersProps } from './Header.type';
import styles from './header.module.css';
import logo from 'assets/logo.svg';
import searchIcon from 'assets/search.svg';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import CustomCheckbox from 'components/CustomCheckbox/CustomCheckbox';

const Header = ({ search, updateProductsSearch }: HeadersProps) => {
  const handleSearchChange = (e: any) => {
    updateProductsSearch({ ...search, search: e.target.value, page: 1 });
  };

  const handleActiveChange = (e: any) => {
    updateProductsSearch({
      ...search,
      active: e.target.checked ? true : null,
      page: 1,
    });
  };

  const handlePromoChange = (e: any) => {
    updateProductsSearch({
      ...search,
      promo: e.target.checked ? true : null,
      page: 1,
    });
  };

  return (
    <header className={styles.header}>
      <section className={styles.headerGrid}>
        <img className={styles.headerLogo} src={logo} alt="join.tsh.io" />
        <Button className={styles.headerButton} outline>
          Log in
        </Button>
        <Input
          className={styles.headerSearch}
          type="text"
          placeholder="Search"
          icon={searchIcon}
          iconAlt="search"
          value={search.search}
          onChange={handleSearchChange}
        />
        <div className={styles.headerFilters}>
          <CustomCheckbox
            label="Active"
            checked={!!search.active}
            onChange={handleActiveChange}
          />
          <CustomCheckbox
            label="Promo"
            checked={!!search.promo}
            onChange={handlePromoChange}
          />
        </div>
      </section>
    </header>
  );
};

Header.propTypes = {
  search: PropTypes.object.isRequired,
  updateProductsSearch: PropTypes.func,
};

export default Header;

import React from 'react';

import styles from './header.module.css';
import logo from 'assets/logo.svg';
import searchIcon from 'assets/search.svg';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import CustomCheckbox from 'components/CustomCheckbox/CustomCheckbox';
import { Search } from 'api/types/ProductsSearch.type';

type HeadersProps = {
  search: Search;
  updateProductsSearch: Function;
};

const Header = ({ search, updateProductsSearch }: HeadersProps) => {
  const handleSearchChange = (e: any) => {
    updateProductsSearch({ ...search, search: e.target.value });
  };

  const handleActiveChange = (e: any) => {
    updateProductsSearch({ ...search, active: e.target.checked ? true : null });
  };

  const handlePromoChange = (e: any) => {
    updateProductsSearch({ ...search, promo: e.target.checked ? true : null });
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

export default Header;

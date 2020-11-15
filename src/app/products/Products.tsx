import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { RouteComponentProps } from 'react-router-dom';

import Header from 'components/Header/Header';
import { fetchProducts } from 'api/products';
import { Search } from 'api/types/ProductsSearch.type';
import { getQueryVariables, serialize } from 'utils/queryStrings';

export const Products = ({ location, history }: RouteComponentProps) => {
  const query = getQueryVariables(location.search);
  const setLocationBySearch = (search: Search) => {
    history.push({
      pathname: '/',
      search: `?${serialize(search)}`,
    });
  };

  const [search, setSearch] = useState<Search>({
    limit: !!query.limit ? Number(query.limit) : 8,
    page: !!query.page ? Number(query.page) : 1,
    search: !!query.search ? query.search : '',
    promo: !!query.promo ? Boolean(query.promo) : null,
    active: !!query.active ? Boolean(query.active) : null,
  });
  const { refetch } = useQuery('fetchProducts', () => fetchProducts(search));

  useEffect(() => {
    setLocationBySearch(search);
    refetch();
  }, [search]);

  return (
    <>
      <Header search={search} updateProductsSearch={setSearch} />
    </>
  );
};

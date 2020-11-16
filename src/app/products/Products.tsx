import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { RouteComponentProps } from 'react-router-dom';

import Header from 'components/Header/Header';
import { fetchProducts } from 'api/products';
import { Search } from 'api/types/ProductsSearch.type';
import { getQueryVariables, serialize } from 'utils/queryStrings';
import { ProductsResponse } from 'api/types/ProductsResponse.type';
import ProductsList from 'components/ProductsList/ProductsList';
import Pagination from 'components/Pagination/Pagination';
import EmptyProductsList from 'components/EmptyProductsList/EmptyProductsList';

export const Products = ({ location, history }: RouteComponentProps) => {
  const query = getQueryVariables(location.search);
  const [search, setSearch] = useState<Search>({
    limit: !!query.limit ? Number(query.limit) : 8,
    page: !!query.page ? Number(query.page) : 1,
    search: !!query.search ? query.search : '',
    promo: !!query.promo ? Boolean(query.promo) : null,
    active: !!query.active ? Boolean(query.active) : null,
  });

  const { data, refetch } = useQuery<ProductsResponse>('fetchProducts', () =>
    fetchProducts(search)
  );

  useEffect(() => {
    history.push({
      pathname: '/',
      search: `?${serialize(search)}`,
    });
    refetch();
  }, [search, history, refetch]);

  return (
    <>
      <Header search={search} updateProductsSearch={setSearch} />
      {data?.items.length && data?.meta ? (
        <>
          <ProductsList products={data?.items} />
          <Pagination
            meta={data?.meta}
            search={search}
            updateProductsSearch={setSearch}
          />
        </>
      ) : (
        <EmptyProductsList />
      )}
    </>
  );
};

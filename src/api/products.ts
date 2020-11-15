import { serialize } from 'utils/queryStrings';
import { ProductsResponse } from './types/ProductsResponse.type';
import { Search } from './types/ProductsSearch.type';

export const fetchProducts = (search: Search): Promise<ProductsResponse> => {
  const queryString = serialize(search);
  return fetch(`${process.env.REACT_APP_API_URL}/product?${queryString}`)
    .then(res => res.json());
}

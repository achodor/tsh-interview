import { serialize } from 'utils/queryStrings';
import { Search } from './types/ProductsSearch.type';

export const fetchProducts = (search: Search): Promise<Response> => {
  const queryString = serialize(search);
  return fetch(`${process.env.REACT_APP_API_URL}/product?${queryString}`);
}

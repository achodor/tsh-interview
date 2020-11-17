import { ResponseMeta } from 'api/types/ResponseMeta.type';
import { Search } from 'api/types/ProductsSearch.type';

export type PaginationProps = {
  meta: ResponseMeta;
  search: Search;
  updateProductsSearch: Function;
};

import { Product } from './Product.type';
import { ResponseMeta } from './ResponseMeta.type';

export type ProductsResponse = {
  items: Product[];
  links: { [key: string]: string };
  meta: ResponseMeta;
}

import { Product } from './Product.type';

export type ProductsResponse = {
  items: Product[];
  links: { [key: string]: string };
  meta: { [key: string]: string };
}

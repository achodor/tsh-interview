import { Product } from 'api/types/Product.type';

export type ProductModalProps = {
  product: Product;
  closeCallback: Function;
};

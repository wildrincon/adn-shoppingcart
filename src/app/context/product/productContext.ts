import { createContext } from 'react';

import { IState } from '../../../interfaces/product-interfaces';

export const initialState: IState = {
  productsShop: [],
  loadingOne: true,
  loadingHome: true,
  loadingShop: true,
  getProduct: () => {},
  getProductsShop: () => {},
  product: {
    image: '',
    id: '',
    title: '',
    price: 0,
    description: '',
    slug: '',
    images: [],
  },
};

const ProductContext = createContext(initialState);

export default ProductContext;

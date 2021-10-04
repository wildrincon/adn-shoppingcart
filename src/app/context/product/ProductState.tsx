import React, { useReducer } from 'react';
import axios from 'axios';

import productReducer from './productReducer';
import ProductContext, { initialState } from './productContext';
import { productTypes } from '../types';

const ProductState: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const getProduct = async (slug: string) => {
    try {
      dispatch({ type: productTypes.LOADING_PRODUCT });

      const res = await axios.get(`http://localhost:3001/products${slug}`);

      dispatch({ type: productTypes.GET_PRODUCT, payload: res.data });
    } catch (err) {
      console.log(err);
    }
  };

  const getProductsShop = async () => {
    try {
      const res = await axios.get('http://localhost:3001/products');
      console.log("data", res.data);
      dispatch({
        type: productTypes.GET_SHOP_PRODUCTS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        productsShop: state.productsShop,
        loadingOne: state.loadingOne,
        loadingHome: state.loadingHome,
        loadingShop: state.loadingShop,
        product: state.product,
        getProduct,
        getProductsShop,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductState;

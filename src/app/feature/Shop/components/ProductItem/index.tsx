import React from 'react';
import { Link } from 'react-router-dom';

import { IProduct } from '../../../../../interfaces/product-interfaces';

export const ProductItem: React.FC<{ product: IProduct }> = ({ product }) => {
  return (
    <div className="product">
      <figure>
        <img src={product.image} alt="Product" />

        <Link to={`/products/${product.slug}`}>
          <figcaption>{product.title}</figcaption>
        </Link>
      </figure>
      <p className="product__price">
        <span className="product__price--normal">${product.price}</span>
      </p>
    </div>
  );
};

export default ProductItem;

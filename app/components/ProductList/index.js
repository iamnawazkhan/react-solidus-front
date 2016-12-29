import React, { PropTypes } from 'react';
import { Product } from 'components';

export const ProductList = ({ products }) => (
  <div className="flexList">
    {products && products.length > 0
      ? products.map((product) => <Product product={product} key={product.id} />)
      : <div className="text-center">No products</div>
    }
  </div>
);

ProductList.propTypes = {
  products: PropTypes.array,
};

export default ProductList;

import React, { PropTypes } from 'react';
import { Product } from 'components';

export const ProductList = ({ products }) => (
  products && products.length > 0
    ?
      <div className="container-fluid" style={{ marginLeft: '180px' }}>
        <div className="row">
          {products.map((product) => <Product product={product} key={product.id} />)}
        </div>
      </div>
    :
      <div style={{ textAlign: 'center' }}>No products</div>

);

ProductList.propTypes = {
  products: PropTypes.array,
};

export default ProductList;

import React, { PropTypes } from 'react';
// import styles from './styles.scss';

export const ProductList = ({ products }) => (
  <div>
    {products && products.toString()}
  </div>
);

ProductList.propTypes = {
  products: PropTypes.array,
};

export default ProductList;

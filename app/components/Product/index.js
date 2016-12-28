import React, { PropTypes } from 'react';
import styles from './styles.scss';

export const Product = ({ product }, { router }) => (
  <div className={`col-xs-12 col-sm-6 col-md-4 col-lg-3 ${styles.productWrapper}`}>
    <div className={styles.product} onClick={() => router.push(`/product/${product.id}`)}>
      <img src={product.master.images[0].small_url} alt="no" width="100" height="100" />
      <div>{product.name}</div>
      <div>{product.display_price}</div>
    </div>
  </div>
);

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

Product.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default Product;
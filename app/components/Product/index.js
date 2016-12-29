import React, { PropTypes } from 'react';
import styles from './styles.scss';
import { Tooltip } from 'components';

export const Product = ({ product }, { router }) => (
  <div className={styles.product} onClick={() => router.push(`/product/${product.id}`)}>
    <img src={product.master.images[0].large_url} alt="no" width="180" height="180" />
    <div className={styles.name}><span className="text-center">{product.name}</span></div>
    <div className={styles.actions}>
      <div>{product.display_price}</div>
      <div>
        <Tooltip tooltip="Add to favorites">
          <i className="fa fa-heart-o" />
        </Tooltip>
        <Tooltip tooltip="Add to card">
          <i className="fa fa-cart-plus" />
        </Tooltip>
      </div>
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

import React, { PropTypes } from 'react';
import styles from './productCard.scss';
import { IconButton } from 'components';
import { addToCart, removeFromCart } from 'reducers/cart';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const ProductCard = ({ product, buyed, ...props }) => (
  <div className={styles.product}>
    <Link to={`/product/${product.id}`}>
      <img src={product.master.images[0].large_url} alt="no" width="180" height="180" />
      <h4 className={styles.name}><span>{product.name}</span></h4>
    </Link>
    <div className={styles.actions}>
      <div>{product.display_price}</div>
      <div>
        <IconButton className="fa fa-heart-o" tooltip="Like it!" />
        {buyed
          ? <IconButton
            className="fa fa-trash-o"
            tooltip="Don't want to buy it now"
            onClick={() => props.removeFromCart(product.id)}
          />
          : <IconButton
            className="fa fa-cart-plus"
            tooltip="Buy it!"
            onClick={() => props.addToCart({ variant_id: product.master.id, product_id: product.id, count: 1 })}
          />
        }
      </div>
    </div>
  </div>
);

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  buyed: PropTypes.bool,
};

export default connect(null, { addToCart, removeFromCart })(ProductCard);

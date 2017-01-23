import React, { PropTypes, Component } from 'react';
import styles from './styles.scss';
import { Tooltip } from 'components';
import { addToCart, removeFromCart } from 'reducers/cart';
import { connect } from 'react-redux';
import { Link } from 'react-router';

@connect(null, { addToCart, removeFromCart })
export default class Product extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    product: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    buyed: PropTypes.bool,
  };

  render = () => {
    const { product, buyed } = this.props;

    return (
      <div className={styles.product}>
        <Link to={`/product/${product.id}`}>
          <img src={product.master.images[0].large_url} alt="no" width="180" height="180" />
          <div className={styles.name}><span className="text-center">{product.name}</span></div>
        </Link>
        <div className={styles.actions}>
          <div>{product.display_price}</div>
          <div>
            <Tooltip tooltip="Add to favorites">
              <i className="fa fa-heart-o icon-big" />
            </Tooltip>
            {buyed
              ? <Tooltip tooltip="Remove from cart">
                <i className="fa fa-trash-o icon-big" onClick={() => this.props.removeFromCart(product.id)} />
              </Tooltip>
              : <Tooltip tooltip="Add to cart">
                <i className="fa fa-cart-plus icon-big" onClick={() => this.props.addToCart({ variant_id: product.master.id, product_id: product.id, count: 1 })} />
              </Tooltip>
            }
          </div>
        </div>
      </div>
    );
  }
}

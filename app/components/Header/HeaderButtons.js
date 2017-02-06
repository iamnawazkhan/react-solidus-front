import React, { PropTypes, Component } from 'react';
import { Badge } from 'react-bootstrap';
import { connect } from 'react-redux';
import { selectCartItems } from 'selectors/cart';
import { createStructuredSelector } from 'reselect';
import styles from './styles.scss';
import isEmpty from 'lodash/isEmpty';
import { IconButton } from 'components';

@connect(() => createStructuredSelector({
  cart: selectCartItems(),
}))
export default class HeaderButtons extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    cart: PropTypes.array,
  };

  render = () => {
    const { cart } = this.props;

    return (
      <div className={styles.headerButtons}>
        <IconButton className="fa fa-shopping-cart" tooltip="Your order">
          {!isEmpty(cart) && <Badge>{cart.length}</Badge>}
        </IconButton>
        <IconButton className="fa fa-heart" tooltip="Liked goods" />
        <IconButton className="fa fa-user-circle" tooltip="Sign in" />
      </div>
    );
  }
}

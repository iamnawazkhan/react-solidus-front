import React, { PropTypes, Component } from 'react';
import { Badge } from 'react-bootstrap';
import { connect } from 'react-redux';
import { selectCartItems } from 'selectors/cart';
import { createStructuredSelector } from 'reselect';
import styles from './styles.scss';
import isEmpty from 'lodash/isEmpty';

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
        <i className="fa fa-shopping-cart clickable icon-big">{!isEmpty(cart) && <Badge>{cart.length}</Badge>}</i>
        <i className="fa fa-heart clickable icon-big" />
        <i className="fa fa-user-circle clickable icon-big" />
      </div>
    );
  }
}

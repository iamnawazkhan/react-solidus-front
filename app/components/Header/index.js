import React, { PropTypes, Component } from 'react';
import { Badge } from 'react-bootstrap';
import { connect } from 'react-redux';
import { selectCartItems } from 'selectors/cart';
import { createStructuredSelector } from 'reselect';
import styles from './styles.scss';
import Logo from './Logo';
import HeaderSearch from './HeaderSearch';
import isEmpty from 'lodash/isEmpty';
import { IconButton } from 'components';
import classnames from 'classnames';

@connect(() => createStructuredSelector({
  cart: selectCartItems(),
}))
export default class Header extends Component {
  static propTypes = {
    cart: PropTypes.array,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  toggleCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { cart } = this.props;
    const { collapsed } = this.state;

    return (
      <header className={styles.header}>
        <div className="container">
          <div className={classnames('hidden-xs', styles.contentWrapper)}>
            <Logo />
            <HeaderSearch />
            <div>
              <div className={styles.headerButtons}>
                {!isEmpty(cart) && <IconButton className="fa fa-shopping-cart" tooltip="Your cart">
                  <Badge>{cart.length}</Badge>
                </IconButton>}
                <IconButton className="fa fa-heart" tooltip="Liked goods" />
                <IconButton className="fa fa-user-circle" tooltip="Sign in" />
              </div>
            </div>
          </div>
          <div className={classnames('hidden-sm hidden-md hidden-lg', styles.contentWrapper)}>
            <IconButton className="fa fa-bars" onClick={this.toggleCollapse} />
            <IconButton className="fa fa-user-circle" tooltip="Sign in" />
            <div className={classnames(styles.offcanvas, { [styles.collapsed]: collapsed })}>
              <Logo className={styles.mobileLogo} />
              <HeaderSearch />
              <nav className={styles.nav}>
                {!isEmpty(cart) && <li><i className="fa fa-shopping-cart icon-before-text"><Badge>{cart.length}</Badge></i>Cart</li>}
                <li><i className="fa fa-heart icon-before-text" />Liked</li>
              </nav>
            </div>
            <div className={classnames(styles.backdrop, 'fadeIn', { shown: collapsed })} onClick={this.toggleCollapse} />
          </div>
        </div>
      </header>
    );
  }
}

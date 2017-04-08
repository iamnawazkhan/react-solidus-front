import React, { PropTypes, Component } from 'react';
import { Header, Footer, Auth } from 'components';
import styles from './coreLayout.scss';
import classnames from 'classnames';
import { loadCart } from 'reducers/cart';
import { connect } from 'react-redux';

import 'theme/theme.scss';
import 'styles/core.scss';
import 'styles/utils.scss';
import 'styles/bootstrap-overrides.scss';

@connect(null, { loadCart })
export default class CoreLayout extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    location: PropTypes.object.isRequired,
    loadCart: PropTypes.func.isRequired,
  };

  static childContextTypes = {
    location: PropTypes.object,
  };

  getChildContext() {
    return {
      location: this.props.location,
    };
  }

  componentDidMount = () => {
    this.props.loadCart();
  };

  render() {
    return (
      <div className={styles.globalContainer}>
        <Header />
        <Auth />
        <div className={classnames('container', styles.content)}>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

import React, { PropTypes, Component } from 'react';
import { Header, Footer } from 'components';
import styles from './styles.scss';
import classnames from 'classnames';

import 'styles/core.scss';
import 'styles/utils.scss';
import 'styles/bootstrap-overrides.scss';

export default class CoreLayout extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    location: PropTypes.object.isRequired,
  };

  static childContextTypes = {
    location: PropTypes.object,
  };

  getChildContext() {
    return {
      location: this.props.location,
    };
  }

  render() {
    return (
      <div className={styles.globalContainer}>
        <Header />
        <div className={classnames('container', styles.content)}>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

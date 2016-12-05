import React, { PropTypes } from 'react';
import { Header, Footer } from 'components';
import styles from './styles.scss';

import 'styles/core.scss';
import 'styles/utils.scss';

export const CoreLayout = ({ children }) => (
  <div className={styles.globalContainer}>
    <Header />
    <div className={`container-fluid ${styles.content}`}>
      {children}
    </div>
    <Footer />
  </div>
);

CoreLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CoreLayout;

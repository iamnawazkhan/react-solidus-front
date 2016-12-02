import React, { PropTypes } from 'react';
import { Header, Footer } from 'components';

import 'styles/core.scss';
import 'styles/utils.scss';

export const CoreLayout = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);

CoreLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CoreLayout;

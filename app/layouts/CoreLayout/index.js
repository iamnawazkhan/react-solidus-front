import React, { PropTypes } from 'react';
import 'styles/core.scss';

export const CoreLayout = ({ children }) => (
  <div>
    Core
    <div>
      {children}
    </div>
  </div>
);

CoreLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CoreLayout;

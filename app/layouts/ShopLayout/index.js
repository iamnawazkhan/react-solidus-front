import React, { PropTypes } from 'react';

export const ShopLayout = ({ children }) => (
  <div>
    Shop
    <div>
      {children}
    </div>
  </div>
);

ShopLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ShopLayout;

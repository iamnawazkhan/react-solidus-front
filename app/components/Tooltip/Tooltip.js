import React, { PropTypes } from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

const OverlayTooltip = ({ children, placement = 'bottom', tooltip }) => (
  <OverlayTrigger placement={placement} overlay={<Tooltip id="tooltip">{tooltip}</Tooltip>}>
    {children}
  </OverlayTrigger>
);

OverlayTooltip.propTypes = {
  children: PropTypes.node.isRequired,
  tooltip: PropTypes.node.isRequired,
  placement: PropTypes.string,
};

export default OverlayTooltip;

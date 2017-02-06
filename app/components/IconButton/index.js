import React, { PropTypes } from 'react';
import { Tooltip } from 'components';
import classnames from 'classnames';
import styles from './styles.scss';

const IconButton = ({ className, tooltip, tooltipPlacement, ...props }) => (
  tooltip
    ? <Tooltip tooltip={tooltip} placement={tooltipPlacement}><i className={classnames(className, styles.icon)} {...props} /></Tooltip>
    : <i className={classnames(className, styles.icon)} {...props} />
);

IconButton.propTypes = {
  tooltip: PropTypes.string,
  tooltipPlacement: PropTypes.string,
  className: PropTypes.string.isRequired,
};

export default IconButton;

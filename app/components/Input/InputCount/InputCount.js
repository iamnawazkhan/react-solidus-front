import React, { PropTypes } from 'react';
import classnames from 'classnames';

const InputCount = ({ input: { value, onChange }, className }) => (
  <div className="form-group">
    <input
      type="number"
      className={classnames('form-control', className)}
      onChange={onChange}
      value={value}
    />
  </div>
);

InputCount.propTypes = {
  input: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default InputCount;

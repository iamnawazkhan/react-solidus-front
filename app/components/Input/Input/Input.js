import React, { PropTypes } from 'react';
import classnames from 'classnames';
import fieldStyles from '../fieldStyles.scss';

const Input = ({ input: { value, onChange, onBlur }, meta: { touched, error }, className, type, label, placeholder }) => (
  <div className="form-group">
    {label && <label>{label}</label>}
    <input
      type={type || 'text'}
      className={classnames('form-control', className)}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      placeholder={placeholder}
    />
    {touched && error && <div className={fieldStyles.error}>{error}</div>}
  </div>
);

Input.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default Input;

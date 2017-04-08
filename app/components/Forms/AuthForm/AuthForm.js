import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import { Button } from 'react-bootstrap';
import { required, minLength, email } from 'utils/validators';
import { Input } from 'components';
import styles from './authForm.scss';
const minPasswordLength = 6;

const validate = (values) => values.get('password') === values.get('password_confirmation') ? {} : { password_confirmation: 'Must be equal to password' };

const AuthForm = ({ type, handleSubmit, valid }) => (
  <div>
    <h5 className={styles.header}><span>or</span></h5>
    <form onSubmit={handleSubmit} className={styles.form}>
      <Field
        name="email"
        type="email"
        component={Input}
        validate={[required, email]}
        placeholder="Email"
      />
      <Field
        name="password"
        type="password"
        component={Input}
        validate={[required, minLength(minPasswordLength)]}
        placeholder="Password"
      />
      {type === 'signUp' && <Field
        name="password_confirmation"
        type="password"
        component={Input}
        validate={[required, minLength(minPasswordLength)]}
        placeholder="Repeat password"
      />}
      <Button className={styles.submit} type="submit" disabled={!valid} bsStyle="success">{type === 'login' ? 'Sign In' : 'Sign Up'}</Button>
    </form>
  </div>
);

AuthForm.propTypes = {
  type: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  valid: PropTypes.bool,
};

export default reduxForm({ form: 'auth', validate })(AuthForm);

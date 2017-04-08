import React, { PropTypes } from 'react';
import Socials from '../Socials/Socials';
import { AuthForm } from 'components';
import { login } from 'reducers/auth';
import { connect } from 'react-redux';

const Login = (props) => (
  <div className="fadeIn shown">
    <h4 className="text-center margin-top-0">Login from</h4>
    <Socials />
    <AuthForm type="login" onSubmit={props.login} />
  </div>
);

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, { login })(Login);

import React, { PropTypes } from 'react';
import Socials from '../Socials/Socials';
import { AuthForm } from 'components';
import { signUp } from 'reducers/auth';
import { connect } from 'react-redux';

const SignUp = (props) => (
  <div className="fadeIn shown">
    <h4 className="text-center margin-top-0">Sign Up from</h4>
    <Socials />
    <AuthForm type="signUp" onSubmit={props.signUp} />
  </div>
);

SignUp.propTypes = {
  signUp: PropTypes.func.isRequired,
};

export default connect(null, { signUp })(SignUp);

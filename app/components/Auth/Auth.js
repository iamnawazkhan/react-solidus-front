import React, { PropTypes } from 'react';
import styles from './auth.scss';
import { Modal } from 'react-bootstrap';
import classnames from 'classnames';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';

const Auth = (undefined, { router, location }) => {
  const onClose = () => {
    delete location.query.auth;
    router.push(location);
  };

  const toTab = (tab) => {
    delete location.query.auth;
    router.push({ ...location, query: { ...location.query, auth: tab } });
  };

  const { query } = location;
  const showModal = ['login', 'signUp', 'recovery', 'reset'].includes(query.auth);

  return (
    <Modal show={showModal} onHide={onClose} className={styles.modal}>
      <ul className={classnames(styles.header, styles[query.auth])}>
        <li><span onClick={() => toTab('login')}>Login</span></li>
        <li><span onClick={() => toTab('signUp')}>Sign Up</span></li>
      </ul>
      <Modal.Body className={styles.content}>
        <div>
          {query.auth === 'login' && <Login />}
          {query.auth === 'signUp' && <SignUp />}
          {query.auth === 'recovery' && 'recovery'}
          {query.auth === 'reset' && 'reset'}
        </div>
      </Modal.Body>
    </Modal>
  );
};

Auth.contextTypes = {
  router: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default Auth;

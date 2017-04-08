import React from 'react';
import { Button } from 'react-bootstrap';
import styles from '../auth.scss';

const Login = () => (
  <div className={styles.socials}>
    <Button bsStyle="info" className={styles.fb}><i className="fa fa-facebook-official icon-before-text" />Facebook</Button>
    <Button bsStyle="info" className={styles.vk}><i className="fa fa-vk icon-before-text" />VKontakte</Button>
    <Button bsStyle="danger"><i className="fa fa-google-plus icon-before-text" />Google +</Button>
    <Button bsStyle="info" className={styles.linkedIn}><i className="fa fa-linkedin-square icon-before-text" />LinkedIn</Button>
    <Button bsStyle="info"><i className="fa fa-twitter icon-before-text" />Twitter</Button>
    <Button bsStyle="primary"><i className="fa fa-github icon-before-text" />Github</Button>
  </div>
);

export default Login;

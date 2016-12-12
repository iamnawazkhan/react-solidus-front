import React from 'react';
import styles from './styles.scss';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export default () => (
  <footer className={styles.footer}>
    <div>
      <div><FormattedMessage {...messages.developerLinkTitle} /></div>
      <a className="fa fa-github icon-link" target="_blank" href="https://github.com/maksymfedenko" />
      <a className="fa fa-linkedin-square icon-link" target="_blank" href="https://www.linkedin.com/in/maksym-fedenko" />
      <a target="_blank" href="https://github.com/maksymfedenko" className={styles.upwork}>
        <svg viewBox="0 -2 16.79 10">
          <path d="M13,1A3.82,3.82,0,0,0,9.3,4.13,16.77,16.77,0,0,1,7.4,0H5.5V5A1.8,1.8,0,0,1,1.9,5V0H0V5A3.7,3.7,0,1,0,7.4,5V4.17A16.14,16.14,0,0,0,8.77,6.45L7.59,12H9.53l0.85-4A4.81,4.81,0,0,0,13,8.73a3.83,3.83,0,0,0,3.79-3.89A3.81,3.81,0,0,0,13,1Zm0,5.74a3.38,3.38,0,0,1-2.13-.85l0.19-.76v0c0.14-.81.57-2.18,2-2.18a1.9,1.9,0,0,1,1.9,1.9A2,2,0,0,1,13,6.78Z" />
        </svg>
      </a>
      <a className="fa fa-gitlab icon-link" target="_blank" href="https://gitlab.com/maksymfedenko" />
    </div>
    <div>
      <div><FormattedMessage {...messages.socialNetworkTitle} /></div>
      <div>
        <a className="fa fa-vk icon-link" target="_blank" href="http://vk.com" />
        <a className="fa fa-youtube icon-link" target="_blank" href="https://youtube.com" />
        <a className="fa fa-facebook-official icon-link" target="_blank" href="http://facebook.com" />
        <a className="fa fa-google-plus icon-link" target="_blank" href="https://plus.google.com" />
        <a className="fa fa-twitter icon-link" target="_blank" href="https://twitter.com" />
        <a className="fa fa-instagram icon-link" target="_blank" href="http://instagram.com" />
      </div>
    </div>
  </footer>
);

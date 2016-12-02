import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';

import Banner from './banner.jpg';
import messages from './messages';
import styles from 'components/Header/styles';
import 'styles/core.scss';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <a href="https://twitter.com/mxstbr">
          <img src={Banner} alt="react-boilerplate - Logo" />
        </a>
        <div className={styles.lol}>example</div>
        <div className="blueBack">example2s</div>
        <div>
          <Link to="/">
            <FormattedMessage {...messages.home} />
          </Link>
          <Link to="/features">
            <FormattedMessage {...messages.features} />
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;

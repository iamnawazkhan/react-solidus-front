import React from 'react';
import styles from './styles.scss';
import Logo from './Logo';
import HeaderSearch from './HeaderSearch';
import HeaderButtons from './HeaderButtons';

export default () => (
  <header className={styles.header}>
    <div className="container">
      <Logo />
      <HeaderSearch />
      <HeaderButtons />
    </div>
  </header>
);

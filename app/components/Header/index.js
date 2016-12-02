import React from 'react';
import styles from './styles.scss';
import Logo from './Logo';
import HeaderSearch from './HeaderSearch';
import HeaderButtons from './HeaderButtons';

export default () => (
  <header className={styles.header}>
    <Logo />
    <HeaderSearch />
    <HeaderButtons />
  </header>
);

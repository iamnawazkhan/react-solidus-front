import React from 'react';
import { PacmanLoader } from 'halogen';
import styles from './styles.scss';

export default () => (
  <div className={styles.wrapper}>
    <div className={styles.spinner}>
      <PacmanLoader color="#00BCD4" />
    </div>
  </div>
);

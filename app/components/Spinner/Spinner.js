import React from 'react';
import { PacmanLoader } from 'halogen';
import styles from './spinner.scss';

export default () => (
  <div className={styles.wrapper}>
    <div className={styles.spinner}>
      <PacmanLoader color="#00BCD4" />
    </div>
  </div>
);

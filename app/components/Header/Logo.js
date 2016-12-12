import React, { PropTypes } from 'react';
import styles from './styles.scss';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export const Logo = (undefined, { router }) => (
  <div className="relative clickable" onClick={() => router.push('/')}>
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="32px"
      height="32px"
      fill="white"
      viewBox="0 0 512 512"
    >
      <path
        d="M0,207.25c0,29.781,20.438,54.594,48,61.75v210.25H16c-8.813,0-16,7.156-16,16s7.188,16,16,16h480c8.875,0,16-7.156,16-16
        s-7.125-16-16-16h-32V269c27.563-7.156,48-31.969,48-61.75v-16H0V207.25z M320,271.25c35.375,0,64-28.656,64-64
        c0,29.781,20.438,54.594,48,61.75v210.25H192v-208c35.375,0,64-28.656,64-64C256,242.594,284.688,271.25,320,271.25z M176,269
        v210.25H80V269c27.563-7.156,48-31.969,48-61.75C128,237.031,148.438,261.844,176,269z M448,47.25H64l-64,128h512L448,47.25z
         M135.188,82.813l-32,64c-1.438,2.813-4.25,4.438-7.188,4.438c-1.188,0-2.406-0.25-3.563-0.844
        c-3.938-1.969-5.563-6.781-3.563-10.719l32-64c2-3.938,6.781-5.531,10.719-3.594C135.563,74.063,137.125,78.875,135.188,82.813z
         M199.188,82.813l-32,64c-1.438,2.813-4.25,4.438-7.188,4.438c-1.188,0-2.406-0.25-3.563-0.844
        c-3.938-1.969-5.563-6.781-3.563-10.719l32-64c2-3.938,6.813-5.531,10.719-3.594C199.563,74.063,201.125,78.875,199.188,82.813z
         M264,143.25c0,4.438-3.563,8-8,8c-4.406,0-8-3.563-8-8v-64c0-4.438,3.594-8,8-8c4.438,0,8,3.563,8,8V143.25z M355.875,150.25
        c-1.25,0.688-2.563,1-3.875,1c-2.813,0-5.563-1.5-7-4.156l-35-64c-2.125-3.875-0.688-8.75,3.188-10.844
        c3.813-2.125,8.75-0.75,10.875,3.156l35,64C361.125,143.281,359.75,148.156,355.875,150.25z M419.563,150.406
        c-1.125,0.594-2.313,0.844-3.563,0.844c-2.938,0-5.75-1.625-7.125-4.438l-32-64c-2-3.938-0.375-8.75,3.563-10.719
        c3.875-1.969,8.75-0.375,10.75,3.594l32,64C425.125,143.625,423.563,148.438,419.563,150.406z M136,385.688v-36.875
        c-4.688-2.813-8-7.688-8-13.563c0-8.844,7.188-16,16-16c8.875,0,16,7.156,16,16c0,5.875-3.281,10.75-8,13.563v36.875
        c4.719,2.813,8,7.688,8,13.563c0,8.844-7.125,16-16,16c-8.813,0-16-7.156-16-16C128,393.375,131.313,388.5,136,385.688z M64,15.25
        c0-8.844,7.188-16,16-16h352c8.875,0,16,7.156,16,16s-7.125,16-16,16H80C71.188,31.25,64,24.094,64,15.25z M280.438,356.906
        l-11.313-11.313l45.25-45.25l11.313,11.313L280.438,356.906z M280.438,402.156l-11.313-11.313l90.5-90.5l11.313,11.313
        L280.438,402.156z M359.625,345.594l11.313,11.313l-45.25,45.25l-11.313-11.313L359.625,345.594z"
      />
    </svg>
    <div className={styles.brandName}>SaleMonster</div>
    <div className={styles.brandMotto}><FormattedMessage {...messages.motto} /></div>
  </div>
);

Logo.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default Logo;

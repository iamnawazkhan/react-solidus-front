import React from 'react';
import { FormattedMessage } from 'react-intl';

import LocaleToggle from 'containers/LocaleToggle';
import messages from './messages';

function Footer() {
  return (
    <footer>
      <section>
        <FormattedMessage {...messages.licenseMessage} />
      </section>
      <section>
        <LocaleToggle />
      </section>
      <section>
        <FormattedMessage
          {...messages.authorMessage}
          values={{
            author: <a href="https://twitter.com/mxstbr">Max Stoiber</a>,
          }}
        />
      </section>
    </footer>
  );
}

export default Footer;

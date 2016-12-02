import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export default () => (
  <div>
    <FormattedMessage {...messages.searchPlaceholder} />
  </div>
);

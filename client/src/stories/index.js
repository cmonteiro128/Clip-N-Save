import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SavedSearches from '../components/account/SavedSearches';

storiesOf('SavedSearches', module).add('with items added', () => (
  <SavedSearches
    savedSearchItems={['Chicken Breast', 'Yogurt', 'Asparagus']}
    addSearchItem={action('onkeydown')}
  >
    Hello Button
  </SavedSearches>
));

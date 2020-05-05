import React from 'react';
import { storiesOf } from '@storybook/react';
import InputField from '../../components/common/InputGroup';

storiesOf('common/InputField', module).add('with label', () => (
  <InputField label="First Name" colItem="col-md-4" type="text" placeholder="First Name" getValue={value => console.log('value', value)} />
));

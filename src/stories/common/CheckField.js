import React from 'react';
import { storiesOf } from '@storybook/react';
import CheckField from '../../components/common/CheckField';

storiesOf('common/CheckField', module)
  .add('with label', () => <CheckField label="Use as Payment" type="text" placeholder="First Name" isChecked />)
  .add('with validate', () => <CheckField label="Use as Payment" type="text" placeholder="First Name" validate="Test validate" isChecked={false} />);

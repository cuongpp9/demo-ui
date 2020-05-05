import React from 'react';
import { storiesOf } from '@storybook/react';
import SelectField from '../../components/common/SelectField';
import data from '../constant';

storiesOf('common/SelectField', module).add('with label', () => (
  <SelectField label="Status" options={data.optionSelect} colItem="col-md-4" onHandleChange={(value, fieldName) => console.log('value, fieldName', value, fieldName)} />
));

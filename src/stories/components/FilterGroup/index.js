import React from 'react';
import { storiesOf } from '@storybook/react';
import FilterGroup from '../../../components/FilterGroup';
import data from '../../constant';

storiesOf('components/FilterGroup', module).add('with input, select, date', () => (
  <FilterGroup
    colDiv="col-md-6"
    colItem="col-md-3"
    data={data.FilterTest}
    onChangeSelect={(value, fieldName) => console.log('onChangeSelect', value, fieldName)}
    getValueInput={(value, fieldName) => console.log('valueAndFieldNam', value, fieldName)}
  />
));

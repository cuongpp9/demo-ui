import React from 'react';
import { storiesOf } from '@storybook/react';
import FormCollapse from '../../components/form/FormCollapse';
import InputField from '../../components/common/InputGroup';
import FilterGroup from '../../components/FilterGroup';
import data from '../constant';

storiesOf('common/Collapsible', module)
  .add('with non-active', () =>
    data.testCollapsible.map(item => (
      <FormCollapse key={item.title} label="First Name" title={item.title} onToggleTab={() => console.log('asdasd')}>
        <FilterGroup
          colDiv="col-md-8"
          colItem="col-md-4"
          data={data.FilterTest}
          onChangeSelect={(value, fieldName) => console.log('onChangeSelect', value, fieldName)}
          getValueInput={value => console.log('value', value)}
        />
      </FormCollapse>
    ))
  )
  .add('with active', () => (
    <FormCollapse title="Create Account Info" isActive onToggleTab={() => console.log('asdasd')}>
      <InputField label="Test Collapsible" type="text" placeholder="First Name" />
    </FormCollapse>
  ));

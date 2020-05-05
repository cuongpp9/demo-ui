import React from 'react';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';
import Dropdown from '../../components/common/Dropdown';

storiesOf('common/Dropdown', module)
  .addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>)
  .add('with items', () => (
    <Dropdown
      title="Customer Hub"
      items={[{ href: '#', label: 'Customer Management' }, { href: '#', label: 'Customer Management' }]}
    />
  ));

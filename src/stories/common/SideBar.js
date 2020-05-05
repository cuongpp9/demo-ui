import React from 'react';
import { MemoryRouter } from 'react-router'
import { storiesOf } from '@storybook/react';

import SideBar from '../../components/common/SideBar';

const ITEMS =[
  {
    isHaveExpand: true,
    mainTilte: 'Config',
    childs: [
      {
        icon:'ti-reload',
        label: 'Custom Attributes',
        href:'',
      }
    ]
  },
  {
    isHaveExpand: false,
    mainTilte: 'Account',
    childs: [
      {
        icon:'ti-mobile',
        label: 'Account info',
        href:'',
      },
      {
        icon:'ti-mobile',
        label: 'Account info',
        href:'',
      },
      {
        icon:'ti-mobile',
        label: 'Account info',
        href:'',
      },
      {
        icon:'ti-mobile',
        label: 'Account info',
        href:'',
      },
      {
        icon:'ti-mobile',
        label: 'Account info',
        href:'',
      },
      {
        icon:'ti-mobile',
        label: 'Account info',
        href:'',
      },
    ]
  }
]
storiesOf('common/SideBar', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('expand', () => (
    <SideBar
      isExpand
      items={ITEMS}
    />
  ));
  storiesOf('common/SideBar', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('no expand', () => (
    <SideBar
      isExpand={false}
      items={ITEMS}
    />
  ));
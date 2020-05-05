import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import FilterGroup from '../../../components/FilterGroup';
import Header from '../../../components/Header';
import SideBar from '../../../components/common/SideBar';
import Footer from '../../../components/Footer';
import Tabel from '../../../components/common/Table';
import data from '../../constant';

const ITEMS = [
  {
    isHaveExpand: true,
    mainTilte: 'Config',
    childs: [
      {
        icon: 'ti-reload',
        label: 'Custom Attributes',
        href: '',
      },
    ],
  },
  {
    isHaveExpand: false,
    mainTilte: 'Account',
    childs: [
      {
        icon: 'ti-mobile',
        label: 'Account info',
        href: '',
      },
      {
        icon: 'ti-mobile',
        label: 'Account info',
        href: '',
      },
      {
        icon: 'ti-mobile',
        label: 'Account info',
        href: '',
      },
      {
        icon: 'ti-mobile',
        label: 'Account info',
        href: '',
      },
      {
        icon: 'ti-mobile',
        label: 'Account info',
        href: '',
      },
      {
        icon: 'ti-mobile',
        label: 'Account info',
        href: '',
      },
    ],
  },
];

storiesOf('components/FullPage', module)
  .addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>)
  .add('with input, select, date', () => (
    <body>
      <div className="wrapper">
        <Header />
        <SideBar isExpand items={ITEMS} />
        <div className="container-fluid">
          <div className="row">
            <div className="content-wrapper">
              <Tabel
                headerItem={data.headerTable}
                data={data.dataTableTest}
                itemStatus={data.iÎtemStatus}
                itemButton={data.itemButton}
              />
              <Footer />
            </div>
          </div>
          
        </div>
        
      </div>
    </body>
  ));

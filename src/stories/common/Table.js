import React from 'react';
import { storiesOf } from '@storybook/react';
import Tabel from '../../components/common/Table';
import data from '../constant';

storiesOf('common/Table', module).add('with status, button', () => (
  <Tabel
    headerItem={data.headerTable}
    data={data.dataTableTest}
    itemStatus={data.itemStatus}
    itemButton={data.itemButton}
  />
));

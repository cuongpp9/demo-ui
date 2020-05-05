import React from 'react';
import { storiesOf } from '@storybook/react';
import Pagination from '../../components/common/Pagination';

const data = [1, 2, 3, 4, 5, 6, 7];

storiesOf('common/Pagination', module).add('default', () => (
  <Pagination data={data} handlePagination={value => console.log('value', value)} />
));

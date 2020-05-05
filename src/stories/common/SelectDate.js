import React from 'react';
import { storiesOf } from '@storybook/react';
import SelectDate from '../../components/common/SelectDate';


storiesOf('common/SelectDate', module).add('with label', () => <SelectDate label="Status" colItem="col-md-4" />);

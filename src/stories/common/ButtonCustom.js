import React from 'react';
import { storiesOf } from '@storybook/react';
import ButtonCustom from '../../components/common/ButtonCustom';

storiesOf('common/ButtonCustom', module)
  .add('default', () => <ButtonCustom label="Button Custom" className="button x-small" colDiv="col-md-3" />)
  .add('with new className', () => (
    <ButtonCustom label="Button Custom" colDiv="col-md-3" className="btn btn-outline-success btn-sm" />
  ));

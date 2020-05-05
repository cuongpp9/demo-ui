
import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from './dropdown';

const DropdownComponent = props => {
  const { title, items } = props;
  return (
    <Dropdown>
      <DropdownToggle>{title}</DropdownToggle>
      <DropdownMenu className="">
        {items.map(item => {
          return <DropdownItem key={item.label} href={item.href}>{item.label}</DropdownItem>;
        })}
      </DropdownMenu>
    </Dropdown>
  );
};

DropdownComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};
DropdownComponent.defaultProps = {
  items: [],
  title: '',
};
export default DropdownComponent;

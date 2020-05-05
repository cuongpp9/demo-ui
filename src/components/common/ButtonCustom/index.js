import React from 'react';
import PropTypes from 'prop-types';

const ButtonCustom = ({ label, className, colDiv }) => (
  <div className={`group-btn-custom ${colDiv}`}>
    <button type="button" className={className || 'button x-small'}>
      {label}
    </button>
  </div>
  
);

ButtonCustom.propTypes = {
	label: PropTypes.string,
	className: PropTypes.string,
	colDiv: PropTypes.string,
};

ButtonCustom.defaultProps = {
	label: '',
	className: '',
	colDiv: '',
};

export default ButtonCustom;

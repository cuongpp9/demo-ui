import React from 'react';
import PropTypes from 'prop-types';

const CheckField = ({ label, validate, isChecked }) => (
  <form className="was-validated">
    <div className="custom-control custom-checkbox">
      <input type="checkbox" checked={isChecked} className="custom-control-input" id="customControlValidation1" required />
      <label className="custom-control-label" htmlFor="customControlValidation1">
        {label}
        <input style={{display: 'none'}} />
      </label>
      {validate && (<div className="invalid-feedback">{validate}</div>)}
    </div>
  </form>
  
);

CheckField.propTypes = {
  label: PropTypes.string,
  isChecked: PropTypes.bool,
  validate: PropTypes.string,
};

CheckField.defaultProps = {
  label: '',
  isChecked: false,
  validate: '',
};
export default CheckField;

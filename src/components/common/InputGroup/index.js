import React from 'react';
import PropTypes from 'prop-types';
import '../styles.scss';

const InputField = ({ label, placeholder, required, type, getValue, name, fieldName, colItem }) => (
  <div className={`form-group ${colItem}`}>
    <span>{label}</span>
    <input
      name={name}
      // value={value}
      type={type}
      className="form-control input-group is-valid"
      placeholder={placeholder}
      required={required}
      onChange={evt => getValue(evt.target.value, fieldName)}
    />
  </div>
);

InputField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.string,
  name: PropTypes.string,
  // value: PropTypes.string,
  getValue: PropTypes.func,
  fieldName: PropTypes.string,
  colItem: PropTypes.string,
};

InputField.defaultProps = {
  label: '',
  type: 'text',
  placeholder: '',
  required: '',
  name: '',
  fieldName: '',
  colItem: '',
  getValue: () => {},
};
export default InputField;

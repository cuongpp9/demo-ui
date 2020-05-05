import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';

const SelectField = ({ label, options, onHandleChange, fieldName, colItem }) => {
  function handleChange(evt) {
    onHandleChange(evt.target.value, fieldName);
  }

  return (
    <div className={`form-group ${colItem}`}>
      <span>{label}</span>
      <select className="form-control form-control-lg" onChange={handleChange}>
        {map(options, (value, key) => (
          <option value={value} key={key}>
            {key}
          </option>
        ))}
      </select>
    </div>
  );
};

SelectField.propTypes = {
  label: PropTypes.string,
  colItem: PropTypes.string,
  fieldName: PropTypes.string,
  options: PropTypes.objectOf(PropTypes.string),
  onHandleChange: PropTypes.func,
};

SelectField.defaultProps = {
  label: '',
  colItem: '',
  fieldName: '',
  options: {},
  onHandleChange: () => {},
};
export default SelectField;

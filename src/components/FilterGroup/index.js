import React from 'react';
import PropTypes from 'prop-types';
import { map, isEmpty } from 'lodash';
import InputField from '../common/InputGroup';
import SelectField from '../common/SelectField';
import SelectDate from '../common/SelectDate';
import ButtonCustom from '../common/ButtonCustom';

export default function FilterGroup({ data, onChangeSelect, getValueInput, colDiv, colItem }) {
  function renderItem(item) {
    if (item && !isEmpty(item.optionSelect)) {
      return (
        <SelectField
          key={item.labelFilter}
          label={item.labelFilter || ''}
          type="text"
          placeholder={item.labelFilter || ''}
          options={item.optionSelect}
          onHandleChange={onChangeSelect}
          fieldName={item.fieldSelect}
          colItem={colItem}
        />
      );
    }

    if (item && item.dateSelect) {
      return (
        <SelectDate
          key={item.labelFilter}
          colItem={colItem}
          label={item.labelFilter || ''}
          fieldName={item.dateSelect}
        />
      );
    }

    return (
      <InputField
        key={item.labelFilter}
        label={item.labelFilter || ''}
        type="text"
        placeholder={item.labelFilter || ''}
        getValue={getValueInput}
        fieldName={item.fieldName}
        colItem={colItem}
      />
    );
  }

  return (
    <div className="card-body group-filter">
      {!isEmpty(data) && map(data, item => renderItem(item))}
      <ButtonCustom label="Search" className="button btn btn-sm" colDiv={colDiv} />
    </div>
  );
}

FilterGroup.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  onChangeSelect: PropTypes.func,
  getValueInput: PropTypes.func,
  colDiv: PropTypes.string,
  colItem: PropTypes.string,
};

FilterGroup.defaultProps = {
  colDiv: '',
  colItem: '',
  data: {},
  onChangeSelect: () => {},
  getValueInput: () => {},
};

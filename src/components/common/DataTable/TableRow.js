import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ColData = ({ name, item, render, onChange }) => {
  const colText = render ? render(name, item, onChange) : item[name];
  return <td>{colText}</td>;
};
ColData.propTypes = {
  name: PropTypes.string,
  item: PropTypes.object,
  render: PropTypes.func,
};
ColData.defaultProps = {
  name: '',
  item: {},
  render: null,
};

const RowHeader = ({ columns, sorted, onSort, isLoading }) => {
  const hHtml = columns.map((col, idx) => {
    const onSortCol = !isLoading && onSort ? onSort : () => {};
    return (
      <th
        key={`th-${col.name}-${idx}`}
        className="header-table"
        onClick={e => onSortCol(col.name, sorted.sortDir === 'desc' ? 'asc' : 'desc')}
        style={col.style ? col.style : {}}
        disabled={isLoading}
      >
        <label>
          {col.isCheckable && <input type="checkbox" checked={col.name === sorted.sortCol} onChange={e => {}} />}
          {col.label ? col.label : ''}
        </label>
      </th>
    );
  });
  return <tr className="text-dark">{hHtml}</tr>;
};

RowHeader.propTypes = {
  columns: PropTypes.array.isRequired,
  sorted: PropTypes.object,
  onSort: PropTypes.func,
  isLoading: PropTypes.bool,
};
RowHeader.defaultProps = {
  columns: [],
  sorted: {},
  isLoading: false,
};

const RowContent = ({ columns, item, className, onClickRow, getRowClass, onEditMember, onChange }) => {
  const rowClassNames = `${className} ${getRowClass ? getRowClass(item) : ''}`;
  const rowCols = columns.map((col, idx) => (
    <ColData key={`${col.key}-${idx}`} name={col.name} item={item} render={col.render} onChange={onChange} />
  ));
  return (
    <tr
      className={rowClassNames}
      onClick={e => {
        onClickRow();
      }}
    >
      {rowCols}
    </tr>
  );
};

RowContent.propTypes = {
  columns: PropTypes.array.isRequired,
  item: PropTypes.object,
  className: PropTypes.string,
  onClickRow: PropTypes.func,
  getRowClass: PropTypes.func,
};
RowContent.defaultProps = {
  columns: [],
  item: {},
  className: '',
  onClickRow: null,
  getRowClass: null,
};

export { RowHeader, RowContent, ColData };

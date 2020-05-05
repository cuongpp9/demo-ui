import React from 'react';
import PropTypes from 'prop-types';
import { PulseLoader } from 'react-spinners';
import { RowContent, RowHeader } from './TableRow';

class DataTable extends React.PureComponent {
  render() {
    const {
      fixedHeader,
      columns,
      data,
      rowClass,
      noDataMessage,
      getRowClass,
      sorted,
      onSort,
      tableClass,
      nullIsLoading,
      isLoading,
      onClickRow,
      onClickItem,
      onChangeItem,
    } = this.props;
    return (
      <div
        className={`table-responsive box-shadow-new ${tableClass} ${fixedHeader ? 'tableFixHead' : ''}`}
        ref={this.tableRef}
      >
        <table className="table table-search table-borderless">
          <thead>
            <RowHeader columns={columns} sorted={sorted} onSort={onSort} isLoading={isLoading} />
          </thead>
          <tbody>
            {!isLoading &&
              data &&
              data.map((item, idx) => (
                <RowContent
                  key={`row-${idx}`}
                  columns={columns}
                  item={item}
                  onClickRow={() => {
                    onClickRow && onClickRow(item);
                  }}
                  className={rowClass}
                  getRowClass={getRowClass}
                  onChange={onChangeItem}
                />
              ))}
            {(isLoading || !data || data.length === 0) && (
              <tr>
                <td colSpan={columns.length} className="text-center">
                  {!isLoading && !nullIsLoading && <span>{noDataMessage}</span>}
                  {(isLoading || ((!data || data.length === 0) && nullIsLoading)) && (
                    <PulseLoader loading size={10} color="#f47900" />
                  )}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

DataTable.propTypes = {
  columns: PropTypes.array.isRequired,
  sorted: PropTypes.object,
  data: PropTypes.array.isRequired,
  rowClass: PropTypes.string,
  tableClass: PropTypes.string,
  noDataMessage: PropTypes.string,
  nullIsLoading: PropTypes.bool,
  isLoading: PropTypes.bool,
  getRowClass: PropTypes.func,
  onSort: PropTypes.func,
  fixedHeader: PropTypes.bool,
};

DataTable.defaultProps = {
  columns: [],
  sorted: {},
  data: [],
  rowClass: '',
  tableClass: '',
  getRowClass: null,
  isLoading: false,
  nullIsLoading: false,
  onSort: null,
  noDataMessage: 'No Records Found',
  fixedHeader: false,
};
export default DataTable;

import React from 'react';
import PropTypes from 'prop-types';
import { map, isEmpty } from 'lodash';
import ButtonCustom from '../ButtonCustom';

class Table extends React.PureComponent {
  renderItemStatus = (value, key, colorStatus) => {
    return (
      <td key={key}>
        <span className={`badge badge-${colorStatus}`}>{value}</span>
      </td>
    );
  };

  renderItemButton = (value, key) => {
    return (
      <td key={key}>
        <ButtonCustom label={value} className="btn btn-outline-success btn-sm" />
      </td>
    );
  };

  renderBodyTable = (value, key) => {
    const { itemStatus, itemButton } = this.props;
    if (itemStatus.indexOf(key) > -1) {
      let colorStatus = '';
      switch (value) {
        case 'Active':
          colorStatus = 'success';
          break;
        case 'Inactive':
          colorStatus = 'warning';
          break;
        case 'Closed':
          colorStatus = 'danger';
          break;
        default:
      }
      return this.renderItemStatus(value, key, colorStatus);
    }
    if (itemButton.indexOf(key) > -1) {
      return this.renderItemButton(value, key);
    }
    return <td key={key}>{value}</td>;
  };

  render() {
    const { headerItem, data } = this.props;
    return (
      <div className="col-sm-12 mb-30">
        <div className="card card-statistics h-100">
          <div className="d-block d-md-flex justify-content-between">
            <div className="d-block d-md-flex clearfix sm-mt-20" />
          </div>
          <div className="table-responsive mt-15">
            <table className="table center-aligned-table mb-0">
              <thead>
                <tr className="text-dark">
                  {!isEmpty(headerItem) && map(headerItem, item => <th key={item.key}>{item.name}</th>)}
                </tr>
              </thead>
              <tbody>
                {!isEmpty(data) &&
                  map(data, (item, i) => (
                    <tr key={i}>{!isEmpty(item) && map(item, (value, key) => this.renderBodyTable(value, key))}</tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

Table.propTypes = {
  headerItem: PropTypes.arrayOf(PropTypes.object),
  data: PropTypes.arrayOf(PropTypes.object),
  itemStatus: PropTypes.arrayOf(PropTypes.string),
  itemButton: PropTypes.arrayOf(PropTypes.string),
};

Table.defaultProps = {
  headerItem: [],
  data: [],
  itemStatus: [],
  itemButton: [],
};
export default Table;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import injectSaga from '../../utils/injectSaga';
import injectReducer from '../../utils/injectReducer';
import saga from './saga';
import reducer from './reducer';
import { getListUser } from './actions';
import { makeGetListUsers } from './selectors';
import { DataTable } from '../../components/common';

const tableColumns = [
  {
    name: 'id',
    label: 'ID',
  },
  {
    name: 'username',
    label: 'Username',
  },
  {
    name: 'email',
    label: 'Email',
  },
  {
    name: 'Edit',
    label: 'Edit',
    render: () => {
      return (
        <button className="no-border" type="button">
          edit
        </button>
      );
    },
  },
];

class Dashboard extends Component {
  state = {};

  componentDidMount() {
    const { getListUser } = this.props;
    getListUser();
  }

  render() {
    const { listUsers } = this.props;
    return (
      <div className="container-group">
        <Link to="/products" className="m-3 pt-3">
          Products
        </Link>
        <h1 className="text-center p-3">List User</h1>
        <div className="col-md-12 d-flex pt-4 container-body">
          <div className="col-md-12 no-padding">
            <DataTable columns={tableColumns} data={listUsers ||[]} />
          </div>
        </div>
      </div>
    );
  }
}

const withSaga = injectSaga({ key: 'dashboardPageSaga', saga });
const withReducer = injectReducer({ key: 'dashboardPageReducer', reducer });

const mapStateToProps = createStructuredSelector({
  listUsers: makeGetListUsers() || {},
});

const withConnect = connect(
  mapStateToProps,
  { getListUser }
);

export default compose(
  withSaga,
  withReducer,
  withConnect
)(Dashboard);

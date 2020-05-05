import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import injectSaga from '../../utils/injectSaga';
import injectReducer from '../../utils/injectReducer';
import saga from './saga';
import reducer from './reducer';
import { getListProducts } from './actions';
import { makeGetListProducts } from './selectors';
import { DataTable } from '../../components/common';

const tableColumns = [
  {
    name: 'id',
    label: 'ID',
  },
  {
    name: 'productName',
    label: 'Product Name',
  },
  {
    name: 'price',
    label: 'Price',
  },
];

class Products extends Component {
  state = {};

  componentDidMount() {
    const { getListProducts } = this.props;
    getListProducts();
  }

  render() {
    const { listProducts } = this.props;
    return (
      <div className="container-group">
        <Link to="/" className="m-3 pt-3">
          User
        </Link>
        <h1 className="text-center p-3">List Products</h1>
        <div className="col-md-12 d-flex pt-4 container-body">
          <div className="col-md-12 no-padding">
            <DataTable columns={tableColumns} data={listProducts || []} />
          </div>
        </div>
      </div>
    );
  }
}

const withSaga = injectSaga({ key: 'productPageSaga', saga });
const withReducer = injectReducer({ key: 'productPageReducer', reducer });

const mapStateToProps = createStructuredSelector({
  listProducts: makeGetListProducts() || {},
});

const withConnect = connect(
  mapStateToProps,
  { getListProducts }
);

export default compose(
  withSaga,
  withReducer,
  withConnect
)(Products);

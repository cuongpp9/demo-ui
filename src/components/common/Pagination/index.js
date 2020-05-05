import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';

const Pagination = ({ data, handlePagination }) => (
  <div className="btn-group mr-2" role="group" aria-label="First group">
    {map(data, item => (
      <button key={item} type="button" className="btn btn-secondary" onClick={()=>handlePagination(item)}>
        {item}
      </button>
    ))}
  </div>
);

Pagination.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number),
  handlePagination: PropTypes.func,

};

Pagination.defaultProps = {
  data: [],
  handlePagination: () => {},
};
export default Pagination;

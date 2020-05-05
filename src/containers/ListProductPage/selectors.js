import { createSelector } from 'reselect';

const selectOnBoard = state => state.get('productPageReducer');

const makeGetListProducts = () =>
  createSelector(selectOnBoard, data => (data && data.get('listProducts') ? data.get('listProducts') : []));

export { makeGetListProducts };

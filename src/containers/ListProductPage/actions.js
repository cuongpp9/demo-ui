import * as types from './types';

export function getListProducts(payload, cb) {
  return {
    type: types.GET_LIST_PRODUCTS,
    payload,
    cb,
  };
}

export function getListProductsSuccess(payload, cb) {
  return {
    type: types.GET_LIST_PRODUCTS_SUCCESS,
    payload,
    cb,
  };
}

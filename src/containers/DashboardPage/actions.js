import * as types from './types';

export function getListUser(payload, cb) {
  return {
    type: types.GET_LIST_USER,
    payload,
    cb,
  };
}

export function getListUserSuccess(payload, cb) {
  return {
    type: types.GET_LIST_USER_SUCCESS,
    payload,
    cb,
  };
}

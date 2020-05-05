import { fromJS } from 'immutable';
import * as types from './types';

export const initialState = fromJS({
  listProducts: {},
});

export default function(state = initialState, action) {
  switch (action.type) {
    case types.GET_LIST_PRODUCTS_SUCCESS:
      return state.set('listProducts', action.payload);

    default:
      return state;
  }
}

import { fromJS } from 'immutable';
import * as types from './types';

export const initialState = fromJS({
  listUsers: {},
});

export default function(state = initialState, action) {
  switch (action.type) {
    case types.GET_LIST_USER_SUCCESS:
      return state.set('listUsers', action.payload);

    default:
      return state;
  }
}

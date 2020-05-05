import { call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as types from './types';
import * as actions from './actions';
import { getListUserFormAPI } from '../../api';

export function* getListUserSaga({ payload, cb }) {
  try {
    const response = yield call(getListUserFormAPI, payload);
    if (response.data) {
      yield put (actions.getListUserSuccess(response.data));
      if (cb) cb({ success: true, data: response.data });
    } else {
      if (cb) cb({ success: false, data: {} });
    }
  } catch (err) {
    if (cb) cb({ success: false });
    toast.error(err.response.data.message);
  }
}

export default function* uploadSkillSaga() {
  yield takeLatest(types.GET_LIST_USER, getListUserSaga);
}

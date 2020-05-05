import { createSelector } from 'reselect';

const selectOnBoard = state => state.get('dashboardPageReducer');

const makeGetListUsers = () =>
  createSelector(selectOnBoard, data => (data && data.get('listUsers') ? data.get('listUsers') : []));

// const makeGetUserRegisterUpdated = () =>
//   createSelector(selectOnBoard, data =>
//     data && data.get('userRegisterUpdated') ? data.get('userRegisterUpdated') : {}
//   );

export { makeGetListUsers };

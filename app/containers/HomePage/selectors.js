import { createSelector } from 'reselect';

const selectUserinfo = (state) => state.get('userInfo');

const getUserName = () => createSelector(
  selectUserinfo,
  (_) => _.get('userName')
);

export {
  getUserName
};

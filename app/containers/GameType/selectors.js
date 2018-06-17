import { createSelector } from 'reselect';

const getGameInfo = (state) => state.get('gameInfo');

const getGameType = () => createSelector(
  getGameInfo,
  (_) => _.get('gameType')
);

export {
  getGameType
};
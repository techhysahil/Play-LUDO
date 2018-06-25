import { createSelector } from 'reselect';

/**
 * Direct selector to the gameBoard state domain
 */
const selectGameBoardDomain = (state) => state.get('gameBoard');

/**
 * Other specific selectors
 */


/**
 * Default selector used by GameBoard
 */

const makeSelectGameBoard = () => createSelector(
  selectGameBoardDomain,
  (substate) => substate.toJS()
);

export default makeSelectGameBoard;
export {
  selectGameBoardDomain,
};

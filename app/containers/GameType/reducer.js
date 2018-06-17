/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  UPDATE_GAMETYPE,
} from './constants';

const initialState = fromJS({
	gameType : null
});

function gameTypeReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_GAMETYPE:
      return state.set('gameType',action.value);
    default:
      return state;
  }
}

export default gameTypeReducer;

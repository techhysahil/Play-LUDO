/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  UPDATE_USERNAME,
} from './constants';

const initialState = fromJS({
	userName : ""
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USERNAME:
      return state.set('userName',action.name);
    default:
      return state;
  }
}

export default homePageReducer;

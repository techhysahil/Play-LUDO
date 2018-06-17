/*
 *
 * HomePage actions
 *
 */

import {
  UPDATE_USERNAME,
} from './constants';

export function updateUserName(userName) {
  return {
    type: UPDATE_USERNAME,
    name : userName
  };
}


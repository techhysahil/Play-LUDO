/*
 *
 * HomePage actions
 *
 */

import {
  UPDATE_GAMETYPE,
} from './constants';

export function updateGameType(gameType) {
  return {
    type: UPDATE_GAMETYPE,
    value : gameType
  };
}


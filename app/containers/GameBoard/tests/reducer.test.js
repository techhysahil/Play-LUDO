
import { fromJS } from 'immutable';
import gameBoardReducer from '../reducer';

describe('gameBoardReducer', () => {
  it('returns the initial state', () => {
    expect(gameBoardReducer(undefined, {})).toEqual(fromJS({}));
  });
});

import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/commentReducer';
import * as types from '../../src/constants/actionTypes';

describe('Comments Reducer', () => {
  it('handles action with unknown type', () => {
    expect(commentReducer()).to.eql([]);
  });

  it('handles action if type SAVE_COMMENT', () => {
   const action = { type: types.SAVE_COMMENT, payload: 'new comment'};
   expect(commentReducer([], action)).to.eql(['new comment']);
  });
});

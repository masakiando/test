import { expect } from '../test_helper';
import * as types from '../../src/actions/types';
import { saveComment } from '../../src/actions/commentActions';

describe('actions', () => {
  describe('actions', () => {
    it('has the correct type', () => {
      const action = saveComment();
      expect(action.type).to.equal(types.SAVE_COMMENT);
    });

    it('has the correct payload', () => {
      const action = saveComment('new comment');
      expect(action.payload).to.equal('new comment');
    });
  });
});

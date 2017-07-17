import * as types from '../../src/actions/types';

export function saveComment(comment) {
  return { type: types.SAVE_COMMENT, payload: comment};
}

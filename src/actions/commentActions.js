import * as types from '../../src/constants/actionTypes';

export function saveComment(comment) {
  return { type: types.SAVE_COMMENT, payload: comment};
}

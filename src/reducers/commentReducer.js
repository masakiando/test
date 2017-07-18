import * as types from '../../src/constants/actionTypes';


export default function commentReducer(state = [], action) {
  switch (action.type) {
    case types.SAVE_COMMENT:
      return [ ...state, action.payload ];
  }
  return state;
}

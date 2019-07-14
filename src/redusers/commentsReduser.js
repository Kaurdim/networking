import { ADD_COMMENT  } from '../constants';


export function commentsReduser(state = [], { type, payload }) {
  switch (type) {
    case ADD_COMMENT:
      return [...state, payload];
    default:
      return state;
  }
}

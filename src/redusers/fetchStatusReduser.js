import { FETCH_ERROR, FETCH_SUCCESS } from '../constants';


export function fetchStatusReduser(state = true, { type }) {
  switch (type) {
    case FETCH_ERROR:
      return false;
    case FETCH_SUCCESS:
      return true;
    default:
      return state;
  }
}

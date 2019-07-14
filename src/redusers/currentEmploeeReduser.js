import { SET_CURRENT_EMPLOYEE } from '../constants';


export function employeeReduser(state = null, { type, payload }) {
  switch (type) {
    case SET_CURRENT_EMPLOYEE:
      return payload
    default:
      return state;
  }
}

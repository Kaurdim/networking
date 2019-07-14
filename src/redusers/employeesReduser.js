import { SET_EMPLOYEES } from '../constants';


export function employeesReduser(state = [], { type, payload }) {
  switch (type) {
    case SET_EMPLOYEES:
      return [...state, ...payload];
    default:
      return state;
  }
}

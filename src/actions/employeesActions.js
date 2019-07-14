import { SET_EMPLOYEES, SET_CURRENT_EMPLOYEE } from '../constants';
import { getEmployees } from '../api/getEmployees';
import { fetchStatusError, fetchStatusSuccess } from './fetchStatusActions';

export function setEmployeesList() {
  return async dispatch => {
    try {
      const employees = await getEmployees();
      if (!employees) {
        return;
      }
      dispatch(fetchStatusSuccess());
      dispatch(setEmployeesAction(employees));
    } catch (error) {
      dispatch(fetchStatusError());
      console.log(error);
    }
  } 
}


function setEmployeesAction (employees) {
  return {
    type: SET_EMPLOYEES,
    payload: employees
  }
}

export function setCurrentEmployeeAction(employee) {
  return {
    type: SET_CURRENT_EMPLOYEE,
    payload: employee
  }
}
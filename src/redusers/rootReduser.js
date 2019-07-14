import { combineReducers } from 'redux';
import { employeesReduser } from './employeesReduser';
import { commentsReduser } from './commentsReduser';
import { employeeReduser } from './currentEmploeeReduser';
import { fetchStatusReduser } from './fetchStatusReduser';

export const rootReducer = combineReducers({
  employees: employeesReduser,
  comments: commentsReduser,
  currentEmployee: employeeReduser,
  fetchSuccess: fetchStatusReduser
});
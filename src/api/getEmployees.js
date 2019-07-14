import { apiGet } from './common';
import { prepareEmployeesData } from '../utils';

const USER_API_URL = 'https://randomuser.me/api/'

const defaultFields = ['id', 'name', 'location', 'picture'];

// Api для случайных пользователей
export const getRundomEmployees = async (limit = 20, fields = defaultFields) => {
  const params = `?results=${limit}&inc=${fields.join(',')}&nat=gb`;
  const response = await fetch(USER_API_URL + params);
  const { results } = await response.json();
  return prepareEmployeesData(results);
}


export const getEmployees = async () => {
  return await apiGet('users');
}
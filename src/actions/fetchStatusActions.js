import { FETCH_ERROR, FETCH_SUCCESS } from '../constants';


export function fetchStatusError() {
  return ({
    type: FETCH_ERROR
  });
}

export function fetchStatusSuccess() {
  return ({
    type: FETCH_SUCCESS
  });
}
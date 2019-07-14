const API_BASE_URL = 'https://9eq76.mocklab.io/';

export const apiPost = async (path, data) => {
  const response = await fetch(API_BASE_URL + path, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return await response.json();
} 

export const apiGet = async (path, params = '') => {
  const response = await fetch(API_BASE_URL + `${path}?${params}`)
  return await response.json();
}
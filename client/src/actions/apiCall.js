import baseURL from '../environments';

const apiCall = (callType, route, data = null, token = null, signal = null) => {
  let headers;
  if (token != null) {
    headers = {
      Accept: 'application/json',
      token
    };
  } else {
    headers = {
      Accept: 'application/json'
    };
  }

  if (callType === 'GET') {
    return fetch(`${baseURL}api/v1/${route}`, {
      headers,
      method: callType,
      mode: 'cors',
      token
    });
  }

  if (data != null) {
    return fetch(`${baseURL}api/v1/${route}`, {
      body: JSON.stringify(data),
      headers,
      method: callType,
      mode: 'cors',
      signal
    });
  }

  return fetch(`${baseURL}api/v1/${route}`, {
    headers,
    method: callType,
    mode: 'cors'
  });
};

export default apiCall;

import axios from 'axios';
import { LOGOUT, SHOW_TOAST } from '../actions/type';

export const apiCall = (config, dispatch) => {
  return new Promise((resolve, reject) => {
    axios({
      method: config.method,
      url: config.url,
      headers: config.headers,
      data: config.data || {},
      timeout: 7000,
    })
    .then(async (response) => {
      resolve(response);
    })
    .catch(async (error) => {
      let response = error.response;

      if (response) {
        if (response.status === 401) {
          dispatch({
            type: LOGOUT,
          });
          dispatch({
            type: SHOW_TOAST,
            payload: {
              show: true,
              type: 'error',
              text: response.message || 'Unauthorized access',
            }
          });
        }
      } else {
        // Handle errors without a response (e.g., network errors, timeouts)
        dispatch({
          type: SHOW_TOAST,
          payload: {
            show: true,
            type: 'error',
            text: error.message || 'Network error or timeout occurred',
          }
        });
      }

      reject(error);
    });
  });
};

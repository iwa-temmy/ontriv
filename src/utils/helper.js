import axios from 'axios';

const BASE_URL='https://app.ontriv.com/'


export const Axios = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setAuthToken = (token) => {
    if (token) {
        axios.defaults.headers.common['x-access-token'] = token;
    } else {
        delete axios.defaults.headers.common['x-access-token'];
    }
};

 
export const setCurrentUser = (data) => {
    try {
      if (data) {
        localStorage.setItem('ontrivUserToken', data.token);
        localStorage.setItem('ontrivCurrentUser', JSON.stringify(data.user));
      } else {
        localStorage.removeItem('ontrivUserToken');
        localStorage.removeItem('ontrivCurrentUser');
      }
    } catch (error) {
      console.log('>>>>: src/helpers/Utils.js : setCurrentUser -> error', error);
    }
  };

import axios from 'axios';

const BASE_URL = 'http://ontriv.herokuapp.com'

export const Axios = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setAuthToken = (token) => {
  console.log(token);
  if (token) {
    // axios.defaults.headers.common['X-CSRFToken'] = token;
    // axios.defaults.headers.common['Authorization'] = token;
    Axios.defaults.headers.common={'Authorization':`Bearer ${token}`}
    Axios.defaults.headers.common = {'Authorization': `bearer ${token}`}
  } else {
    // delete axios.defaults.headers.common['X-CSRFToken'];
    delete Axios.defaults.headers.common['Authorization'];
  }
};


export const setCurrentUser = (data) => {
  try {
    if (data) {
      localStorage.setItem('ontrivUserToken', data.access_token);
      localStorage.setItem('ontrivCurrentUser', JSON.stringify(data.user));
    } else {
      localStorage.removeItem('ontrivUserToken');
      localStorage.removeItem('ontrivCurrentUser');
    }
  } catch (error) {
    console.log('>>>>: src/helpers/Utils.js : setCurrentUser -> error', error);
  }
};

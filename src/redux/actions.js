/*NAV*/
export const SET_CURRENT_SECTION = 'SET_CURRENT_SECTION';

/* AUTH */
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';

export const REGISTER_USER = 'REGISTER_USER';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR';

export const LOGOUT_USER = 'LOGOUT_USER';
export const LOG_USER_IN='LOG_USER_IN'

export const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_ERROR = 'FORGOT_PASSWORD_ERROR';


/*Client*/
export const CREATE_CLIENT = 'CREATE_CLIENT';
export const CREATE_CLIENT_SUCCESS = 'CREATE_CLIENT_SUCCESS';
export const CREATE_CLIENT_ERROR = 'CREATE_CLIENT_ERROR';
export const CREATE_TAG ='CREATE_TAG';
export const CREATE_TAG_SUCCESS = 'CREATE_TAG_SUCCESS';
export const CREATE_TAG_ERROR = 'CREATE_TAG_ERROR';
export const GET_TAG ='GET_TAG';
export const GET_TAG_SUCCESS = 'GET_TAG_SUCCESS';
export const GET_TAG_ERROR = 'GET_TAG_ERROR';




export * from './Auth/action';
export * from './Nav/action';
export * from './Client/action';

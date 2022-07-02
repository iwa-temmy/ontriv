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

//Reset State
export const RESET_MESSAGE = "RESET_MESSAGE";

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

//Setttings (General)
export const RESET_PASSWORD = "RESET_PASSWORD";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_ERROR = "RESET_PASSWORD_ERROR";
export const UPDATE_BUSINESS_DETAILS = "UPDATE_BUSINESS_DETAILS";
export const GET_BUSINESS_DETAILS = "GET_BUSINESS_DETAILS";
export const GET_BUSINESS_DETAILS_SUCCESS = "GET_BUSINESS_DETAILS_SUCCESS";
export const GET_BUSINESS_DETAILS_ERROR = "GET_BUSINESS_DETAILS_ERROR";
export const UPDATE_BUSINESS_DETAILS_SUCCESS = "UPDATE_BUSINESS_DETAILS_SUCCESS";
export const UPDATE_BUSINESS_DETAILS_ERROR = "UPDATE_BUSINESS_DETAILS_ERROR";
export const CHANGE_BUSINESS_LOGO = "CHANGE_BUSINESS_LOGO";
export const CHANGE_BUSINESS_LOGO_SUCCESS = "CHANGE_BUSINESS_LOGO_SUCCESS";
export const CHANGE_BUSINESS_LOGO_ERROR = "CHANGE_BUSINESS_LOGO_ERROR";




export * from './Auth/action';
export * from './Nav/action';
export * from './Client/action';
export * from './Settings/action';

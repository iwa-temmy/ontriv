// eslint-disable-next-line import/no-cycle
import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR,
  RESET_MESSAGE,
} from "../actions";

export const loginUser = (userDetails) => ({
  type: LOGIN_USER,
  payload: { userDetails },
});
export const loginUserSuccess = (userDetails) => ({
  type: LOGIN_USER_SUCCESS,
  payload: { ...userDetails, message: "User Logged In Successfully" },
});
export const loginUserError = (error) => ({
  type: LOGIN_USER_ERROR,
  payload: { error },
});

export const forgotPassword = (data) => ({
  type: FORGOT_PASSWORD,
  payload: { data },
});
export const forgotPasswordSuccess = (message) => ({
  type: FORGOT_PASSWORD_SUCCESS,
  payload: message,
});
export const forgotPasswordError = (message) => ({
  type: FORGOT_PASSWORD_ERROR,
  payload: { message },
});

export const registerUser = (data) => ({
  type: REGISTER_USER,
  payload: { data },
});
export const registerUserSuccess = (message) => ({
  type: REGISTER_USER_SUCCESS,
  payload: message,
});
export const registerUserError = (error) => ({
  type: REGISTER_USER_ERROR,
  payload: error,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const resetMessage = () => ({
  type: RESET_MESSAGE,
});

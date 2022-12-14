import { all, fork, put, takeEvery } from "redux-saga/effects";
// import { setCurrentUser } from '../../utils/helper';
import { Axios, setAuthToken, setCurrentUser } from "../../utils/helper";
import createNotification from "../../utils/Notification";

import {
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT_USER,
  FORGOT_PASSWORD,
  loginUserSuccess,
  loginUserError,
  registerUserSuccess,
  registerUserError,
  forgotPasswordSuccess,
  forgotPasswordError,
  resetMessage,
} from "../actions";
function* register({ payload }) {
  const { data } = payload;

  try {
    const response = yield Axios.post(`/register/api/v1/registration/`, data);
    if (response.status === 201) {
      yield put(registerUserSuccess(response.data.detail));
      window.location.href = `/auth/login`;
    } else {
      yield put(registerUserError(response.data.message));
    }
  } catch (error) {
    let message;
    if (error.response) {
      const errorMessage = error.response.data?.country
        ? error.response.data?.country[0]
        : error.response.data?.email
        ? error.response.data?.email[0]
        : error.response.data?.password
        ? error.response.data?.password[0]
        : error.response.data?.fullname
        ? error.response.data?.fullname[0]
        : error.response.data?.buz
        ? error.response.data?.buz[0].website[0]
        : error.response.data?.buz[0].business_name[0];

      switch (error.response.status) {
        case 500:
          message = "Internal Server Error";
          break;
        case 404:
          message = "Not found";
          break;
        case 401:
          message = "Invalid credentials";
          break;
        case 400:
          message = errorMessage;
          break;
        default:
          message = error.response.statusText;
      }
    } else if (error.message) {
      message = error.message;
    }
    yield put(registerUserError(message));
  }
}
function* login({ payload }) {
  try {
    const response = yield Axios.post(
      "/accounts/api/v1/login/",
      payload.userDetails
    )
    if (response?.status === 200) {
      setAuthToken(response?.data?.access_token);
      setCurrentUser(response?.data);
      const user_data = {
        ...response?.data?.user,
        accessToken: response?.data?.access_token,
      };
      yield put(
        loginUserSuccess({
          userInfo: Object.assign(user_data, response?.data?.profile),
        })
      );
      yield put(resetMessage());
      if (response?.data?.user?.first_login) {
        setTimeout(() => {
          window.location.href = "/setup-business";
        }, 300);
      } else {
        setTimeout(() => {
          window.location.href = "/overview";
        }, 300);
      }
    } else {
      yield put(loginUserError("Login Failed, please try again later"));
    }
  } catch (error) {
    yield put(loginUserError(""));

    // const {message} = erroresponse.data;
    let message;
    if (error.response) {
      message = error?.response?.data.message;
      switch (error?.response?.status) {
        case 500:
          message = "Internal Server Error";
          break;
        case 404:
          message = error?.response?.data?.message;
          break;
        case 401:
          message = "Invalid credentials";
          break;
        default:
          message = error?.response?.data?.error?.[0];
      }
    } else if (error?.message) {
      message = error?.message;
    }
    yield put(loginUserError(message));
    yield put(resetMessage());
  }
}

function* forgotPassword({ payload }) {
  const { email } = payload.data;

  try {
    const response = yield Axios.post(`/accounts/api/v1/password/reset/`, {
      email,
    });

    yield put(forgotPasswordSuccess(response.data.message));
    // createNotification('success', response?.data?.detail)
    window.location.href = "/auth/forgot-password/success";
  } catch (error) {
    let message;
    if (error.response) {
      message = error.response.data.message;
    } else if (error.message) {
      message = error.message;
    }
    createNotification("error", message);
    yield put(forgotPasswordError(message));
  }
}

function* logout() {
  yield setCurrentUser();
  localStorage.clear();
  window.location.href = "/auth/login";
}

export function* watchRegisterUser() {
  yield takeEvery(REGISTER_USER, register);
}
export function* watchLoginUser() {
  yield takeEvery(LOGIN_USER, login);
}
export function* watchLogoutUser() {
  yield takeEvery(LOGOUT_USER, logout);
}
export function* watchForgotPassword() {
  yield takeEvery(FORGOT_PASSWORD, forgotPassword);
}

export default function* rootSaga() {
  yield all([
    fork(watchLoginUser),
    fork(watchLogoutUser),
    fork(watchRegisterUser),
    fork(watchForgotPassword),
  ]);
}

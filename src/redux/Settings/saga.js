import { put, takeEvery, fork, all, call } from "redux-saga/effects";
import Axios from "../../utils/Axios";
import {
  RESET_PASSWORD,
  GET_BUSINESS_DETAILS,
  UPDATE_BUSINESS_DETAILS,
  resetPasswordSuccess,
  resetPasswordError,
  clearMessages,
  getBusinessDetailsSuccess,
  getBusinessDetailsError,
  updateBusinessDetailsSuccess,
  updateBusinessDetailsError
} from "../actions";

function* resetUserPassword({ payload }) {
  const { credentials } = payload;

  try {
    const response = yield Axios.post(
      `/accounts/api/v1/password/change/`,
      credentials
    );
    if (response.status === 200) {
      yield put(resetPasswordSuccess());
    } else {
      yield put(resetPasswordError(response.data.message));
    }
    yield put(clearMessages());
  } catch (error) {
    let message;
    if (error.response) {
      const errorMessage = error.response.data.new_password1
        ? error.response.data.new_password[0]
        : error.response.data.new_password2[0];

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
    yield put(resetPasswordError(message));
    yield put(clearMessages());
  }
}

function* getBusinessDetails() {
  try {
    const response = yield Axios.get(`/business/api/v1/business/`);
    if (response?.status === 200) {
      yield put(getBusinessDetailsSuccess(response?.data));
    } else {
      yield put(getBusinessDetailsError(response?.data?.message));
    }
    yield put(clearMessages());
  } catch (error) {
    let message;
    if (error.response) {
      const errorMessage = error.response.data.new_password1
        ? error.response.data.new_password[0]
        : error.response.data.new_password2[0];

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
    yield put(getBusinessDetailsError(message));
    yield put(clearMessages());
  }
}
function* UpdateBusinessDetails({ payload }) {
  const { credentials } = payload;
  try {
    const response = yield Axios.patch(
      `/business/api/v1/business/`,
      credentials
    );
    if (response?.status === 200) {
      yield put(updateBusinessDetailsSuccess());
      yield call(getBusinessDetails);
    } else {
      yield put(updateBusinessDetailsError(response.data.message));
    }
    yield put(clearMessages());
  } catch (error) {
    let message;
    if (error.response) {
      const errorMessage = "";

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
    yield put(resetPasswordError(message));
    // yield put(clearMessages());
  }
}
export function* watchResetPassword() {
  yield takeEvery(RESET_PASSWORD, resetUserPassword);
}

export function* watchUpdateBusinessDetails() {
  yield takeEvery(UPDATE_BUSINESS_DETAILS, UpdateBusinessDetails);
}

export function* watchGetBusinessDetails() {
  yield takeEvery(GET_BUSINESS_DETAILS, getBusinessDetails);
}

export default function* rootSaga() {
  yield all([
    fork(watchResetPassword),
    fork(watchUpdateBusinessDetails),
    fork(watchGetBusinessDetails),
  ]);
}

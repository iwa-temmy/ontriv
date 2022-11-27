import { put, takeEvery, fork, all, call } from "redux-saga/effects";
import {
  GET_BUSINESS_SOCIALS_CONNECTION_STATUS,
  getBusinessSocialsConnectionStatusSuccess,
  getBusinessSocialsConnectionStatusError,
  clearMessages,
} from "../actions";
import Axios from "../../utils/Axios";

export function* GetBusinessSocialsConnectionStatus({ payload }) {
  try {
    const response = yield Axios.get(
      `/client/api/v1/user/${payload}/social/accounts/`
    );
    if (response?.status === 200) {
      yield put(getBusinessSocialsConnectionStatusSuccess(response?.data));
    } else {
      yield put(
        getBusinessSocialsConnectionStatusError(response?.data?.message)
      );
    }
    yield put(clearMessages());
  } catch (error) {
    let message;
    if (error.response) {
      const errorMessage = error.response.data.detail;

      switch (error?.response?.status) {
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
    yield put(getBusinessSocialsConnectionStatusError(message));
    yield put(clearMessages());
  }
}

export function* watchGetBusinessSocialsConnectionStatus() {
  yield takeEvery(
    GET_BUSINESS_SOCIALS_CONNECTION_STATUS,
    GetBusinessSocialsConnectionStatus
  );
}

export default function* rootSaga() {
  yield all([fork(watchGetBusinessSocialsConnectionStatus)]);
}

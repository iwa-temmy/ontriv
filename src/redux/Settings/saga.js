import { put, takeEvery, fork, all } from "redux-saga/effects";
import Axios  from "../../utils/Axios";
import { RESET_PASSWORD, resetPasswordSuccess, resetPasswordError, clearMessages } from "../actions";

function* resetUserPassword({ payload }) {
  const {credentials} = payload

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
    console.log("NYES!!!")
    yield put(clearMessages());
  } catch (error) {
    let message;
    if (error.response) {
      const errorMessage = error.response.data.new_password1 ? 
      error.response.data.new_password[0] 
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

export function* watchResetPassword() {
  yield takeEvery(RESET_PASSWORD, resetUserPassword);
}


export default function* rootSaga() {
    yield all([
      fork(watchResetPassword)
    ]);
  }
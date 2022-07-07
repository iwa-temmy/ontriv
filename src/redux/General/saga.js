import { put, takeEvery, fork, all} from "redux-saga/effects";
import { GET_USER_DETAILS, getUserDetailSuccess, getUserDetailError, clearMessages } from "../actions";
import Axios from "../../utils/Axios";

export function* GetUserDetails(){
    try {
        const response = yield Axios.get(`/accounts/api/v1/user/`);
        if (response?.status === 200) {
          yield put(getUserDetailSuccess(response?.data));
        } else {
          yield put(getUserDetailError(response?.data?.message));
        }
        yield put(clearMessages());
      } catch (error) {
        let message;
        if (error.response) {
          const errorMessage = error.response.data.detail
    
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
        yield put(getUserDetailError(message));
        yield put(clearMessages());
      }
}

export function* watchGetUserDetails(){
    yield takeEvery(GET_USER_DETAILS, GetUserDetails)
}


export default function* rootSaga() {
    yield all([
      fork(watchGetUserDetails),
    ]);
  }
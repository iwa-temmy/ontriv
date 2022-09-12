import { put, takeEvery, fork, all } from "redux-saga/effects";
import {GET_ALLCLIENT, getAllClient,  getAllClientSuccess, getAllClientError, clearMessages } from "../actions";
import Axios from "../../utils/Axios";

export function* GetAllClients() {
    try {
        const response = yield Axios.get(`/business/api/v1/list-all-client/`);
        if(response?.status === 200) {
            yield put(getAllClientSuccess(response?.data));
        } else {
            yield put(getAllClientError(response?.data.message));
        }
        yield put(clearMessages());
    } catch(error){
        let message;
        if(error.response) {
            const errorMessage = error.response.data.detail;
            switch (error?.response?.status) {
                case 500:
                   message = "Internal Server Error";
                 break;
                 case 404:
                    message="Not found";
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
        yield put(getAllClientError(message));
        yield put(clearMessages());
    }
}

export function* watchGetAllClients() {
    yield takeEvery(GET_ALLCLIENT, GetAllClients);
  }

  export default function* rootSaga() {
    yield all([
        fork(watchGetAllClients)
    ])
  }
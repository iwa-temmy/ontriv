import { put, takeEvery, fork, all} from "redux-saga/effects";
import { GET_INVOICES, getAllInvoicesSuccess, getAllInvoicesError ,clearMessages } from "../actions";
import Axios from "../../utils/Axios";

export function* GetAllInvoices(){
    try {
        const response = yield Axios.get(`/invoice/api/v1/invoice/get/user/all/`);
        if (response?.status === 200) {
          yield put(getAllInvoicesSuccess(response?.data));
        } else {
          yield put(getAllInvoicesError(response?.data?.message));
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
        yield put(getAllInvoicesError(message));
        yield put(clearMessages());
      }
}

export function* watchGetAllInvoices(){
    yield takeEvery(GET_INVOICES, GetAllInvoices)
}


export default function* rootSaga() {
    yield all([
      fork(watchGetAllInvoices),
    ]);
  }


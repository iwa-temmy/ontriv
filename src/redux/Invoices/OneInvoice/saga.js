import { put, takeEvery, fork, all } from "redux-saga/effects";
import {
  GET_ONE_INVOICE,
  GET_ONE_INVOICE_SETTINGS,
  getOneInvoiceSuccess,
  getOneInvoiceError,
  getOneInvoiceSettingSuccess,
  getOneInvoiceSettingError,
  clearMessages
} from "../../actions";
import Axios from "../../../utils/Axios";

export function* GetOneInvoice({ payload }) {
  const { id } = payload;
  try {
    const response = yield Axios.get(`/invoice/api/v1/invoice/full/${id}/`);
    if (response?.status === 200) {
      yield put(getOneInvoiceSuccess(response?.data));
    } else {
      yield put(getOneInvoiceError(response?.data?.message));
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
    yield put(getOneInvoiceError(message));
    yield put(clearMessages());
  }
}

export function* GetOneInvoiceSetting({ payload }) {
  const { id } = payload;
  try {
    const response = yield Axios.get(
      `/invoice/api/v1/invoice/setting/specific/${id}/`
    );
    if (response?.status === 200) {
      yield put(getOneInvoiceSettingSuccess(response?.data?.[0]));
    } else {
      yield put(getOneInvoiceSettingError(response?.data?.message));
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
    yield put(getOneInvoiceSettingError(message));
    yield put(clearMessages());
  }
}

export function* watchGetOneInvoice() {
  yield takeEvery(GET_ONE_INVOICE, GetOneInvoice);
}

export function* watchGetOneInvoiceSetting() {
  yield takeEvery(GET_ONE_INVOICE_SETTINGS, GetOneInvoiceSetting);
}

export default function* rootSaga() {
  yield all([fork(watchGetOneInvoice), fork(watchGetOneInvoiceSetting)]);
}

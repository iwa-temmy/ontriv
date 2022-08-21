import { put, takeEvery, fork, all } from "redux-saga/effects";
import {
  GET_ONE_INVOICE,
  GET_ONE_INVOICE_SETTINGS,
  UPDATE_ONE_INVOICE_SETTINGS,
  RECORD_ONE_INVOICE_PAYMENT,
  DUPLICATE_ONE_INVOICE,
  getOneInvoice,
  getOneInvoiceSuccess,
  getOneInvoiceError,
  getOneInvoiceSettingSuccess,
  getOneInvoiceSettingError,
  updateOneInvoiceSettingSuccess,
  updateOneInvoiceSettingError,
  recordOneInvoicePaymentSuccess,
  recordOneInvoicePaymentError,
  duplicateOneInvoiceSuccess,
  duplicateOneInvoiceError,
  clearMessages,
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
export function* UpdateOneInvoiceSetting({ payload }) {
  const credentials = {
    invoice: payload?.invoice,
    currency: payload?.currency,
    due_date: payload?.due_date,
    reminder: payload?.reminder,
  };
  try {
    const response = yield Axios.put(
      `/invoice/api/v1/invoice/specific/${payload?.id}/`,
      credentials
    );
    if (response?.status === 200) {
      console.log(response?.data);
      yield put(updateOneInvoiceSettingSuccess(response?.data));
    } else {
      yield put(updateOneInvoiceSettingError(response?.data?.message));
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
    yield put(updateOneInvoiceSettingError(message));
    yield put(clearMessages());
  }
}
export function* RecordOneInvoicePayment({ payload }) {
  try {
    const response = yield Axios.post(
      `/invoice/api/v1/payment/record/${payload?.invoice}/`,
      payload
    );
    if (response?.status === 201) {
      console.log(response?.data);
      yield put(recordOneInvoicePaymentSuccess());
      yield put(getOneInvoice(payload?.invoice));
    } else {
      yield put(recordOneInvoicePaymentError(response?.data?.message));
    }
    yield put(clearMessages());
  } catch (error) {
    let message;
    if (error.response) {
      const errorMessage = error.response.data?.amount_paid
        ? `Amount: ${error.response.data?.amount_paid[0]}`
        : error.response.data?.invoice
        ? `Invoice: ${error.response.data?.invoice[0]}`
        : error.response.data?.payment_method
        ? `Payment Method: ${error.response.data?.payment_method[0]}`
        : error.response.data?.payment_date
        ? `Payment Date: ${error.response.data?.payment_date[0]}`
        : null;

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
    yield put(recordOneInvoicePaymentError(message));
    yield put(clearMessages());
  }
}
export function* DuplicateOneInvoicePayment({ payload }) {
  console.log(payload);
  try {
    const response = yield Axios.post(
      `/invoice/api/v1/invoice/duplicate/`,
      payload
    );
    if (response?.status === 201) {
      console.log(response?.data);
      yield put(duplicateOneInvoiceSuccess());
    } else {
      yield put(duplicateOneInvoiceError(response?.data?.message));
    }
    yield put(clearMessages());
  } catch (error) {
    let message;
    if (error.response) {
      const errorMessage = error.response.data?.old_invoice_number
        ? `Invoice: ${error.response.data?.old_invoice_number[0]}`
        : error.response.data?.new_due_date
        ? `Due Date: ${error.response.data?.new_due_date[0]}`
        : error.response.data?.new_client
        ? `Client: ${error.response.data?.new_client[0]}`
        : error.reponse?.data;

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
    yield put(duplicateOneInvoiceError(message));
    yield put(clearMessages());
  }
}
export function* watchGetOneInvoice() {
  yield takeEvery(GET_ONE_INVOICE, GetOneInvoice);
}

export function* watchGetOneInvoiceSetting() {
  yield takeEvery(GET_ONE_INVOICE_SETTINGS, GetOneInvoiceSetting);
}

export function* watchUpdateOneInvoiceSetting() {
  yield takeEvery(UPDATE_ONE_INVOICE_SETTINGS, UpdateOneInvoiceSetting);
}

export function* watchRecordInvoicePayment() {
  yield takeEvery(RECORD_ONE_INVOICE_PAYMENT, RecordOneInvoicePayment);
}
export function* watchDuplicateInvoicePayment() {
  yield takeEvery(DUPLICATE_ONE_INVOICE, DuplicateOneInvoicePayment);
}
export default function* rootSaga() {
  yield all([
    fork(watchGetOneInvoice),
    fork(watchGetOneInvoiceSetting),
    fork(watchUpdateOneInvoiceSetting),
    fork(watchRecordInvoicePayment),
    fork(watchDuplicateInvoicePayment),
  ]);
}

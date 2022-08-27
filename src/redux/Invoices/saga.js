import { put, takeEvery, fork, all, call } from "redux-saga/effects";
import {
  GET_INVOICES,
  CREATE_NEW_INVOICE,
  DELETE_INVOICE,
  REQUEST_PAYOUT,
  getAllInvoicesSuccess,
  getAllInvoicesError,
  createNewInvoiceSuccess,
  createNewInvoiceError,
  deleteInvoiceSuccess,
  deleteInvoiceError,
  requestPayoutSuccess,
  requestPayoutError,
  clearMessages,
} from "../actions";
import Axios from "../../utils/Axios";

export function* GetAllInvoices() {
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
    yield put(getAllInvoicesError(message));
    yield put(clearMessages());
  }
}
export function* CreateNewInvoice({ payload }) {
  const { credentials } = payload;
  try {
    const response = yield Axios.post(
      `/invoice/api/v1/invoice/create/`,
      credentials
    );
    if (response?.status === 201) {
      yield put(createNewInvoiceSuccess());
      yield call(GetAllInvoices);
    } else {
      yield put(createNewInvoiceError(response?.data?.message));
    }
    yield put(clearMessages());
  } catch (error) {
    let message;
    if (error.response) {
      const errorMessage = error?.response?.data?.client
        ? `Client is required`
        : error?.response?.data?.due_date
        ? `Due Date is required`
        : error?.response?.data?.items
        ? `Item amount is required`
        : error?.response?.data?.description
        ? `Description is required}`
        : error?.response?.data?.issued_on
        ? `Issued on is required`
        : error?.response?.data?.sub_total
        ? `Sub Total is required`
        : error?.response?.data?.total
        ? `Total is required`
        : error?.response?.data?.items?.[0]?.item_description?.[0]
        ? `Item description is required`
        : `Item quantity is required`;

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
    yield put(createNewInvoiceError(message));
    yield put(clearMessages());
  }
}

export function* DeleteInvoice({ payload }) {
  console.log(payload);
  try {
    const response = yield Axios.delete(
      `/invoice/api/v1/invoice/full/${payload}/`,
      payload
    );
    if (response?.status === 204) {
      yield put(deleteInvoiceSuccess());
      yield call(GetAllInvoices);
    } else {
      yield put(deleteInvoiceError(response?.data?.message));
    }
    yield put(clearMessages());
  } catch (error) {
    let message;
    if (error.response) {
      const errorMessage = error?.response?.data;

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
    yield put(deleteInvoiceError(message));
    yield put(clearMessages());
  }
}

export function* RequestPayout({ payload }) {
  const { credentials } = payload;
  try {
    const response = yield Axios.post(
      `/invoice/api/v1/invoice/create/`,
      credentials
    );
    if (response?.status === 201) {
      yield put(requestPayoutSuccess());
      yield call(GetAllInvoices);
    } else {
      yield put(requestPayoutError(response?.data?.message));
    }
    yield put(clearMessages());
  } catch (error) {
    let message;
    if (error.response) {
      const errorMessage = error?.response?.data?.amount
        ? `Amount is required`
        : error?.response?.data?.bank_name
        ? `Bank Name is required`
        : error?.response?.data?.account_number
        ? `Account Number is required`
        : error?.response?.data?.account_name
        ? `Account Name is required}`
        : error?.response?.data?.paid_out
        ? `Paid Out is required`
        : null;

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
    yield put(createNewInvoiceError(message));
    yield put(clearMessages());
  }
}
export function* watchGetAllInvoices() {
  yield takeEvery(GET_INVOICES, GetAllInvoices);
}

export function* watchCreateNewInvoice() {
  yield takeEvery(CREATE_NEW_INVOICE, CreateNewInvoice);
}

export function* watchDeleteInvoice() {
  yield takeEvery(DELETE_INVOICE, DeleteInvoice);
}

export function* watchRequestPayout() {
  yield takeEvery(REQUEST_PAYOUT, RequestPayout);
}
export default function* rootSaga() {
  yield all([
    fork(watchGetAllInvoices),
    fork(watchCreateNewInvoice),
    fork(watchDeleteInvoice),
    fork(watchRequestPayout),
  ]);
}

import { all, fork, put, takeEvery } from "redux-saga/effects";
import {
  GET_EXPENSES,
  CREATE_NEW_EXPENSE,
  getAllExpensesSuccess,
  getAllExpensesError,
  createNewExpenseSuccess,
  createNewExpenseError,
  clearMessages,
} from "../actions";
import Axios from "../../utils/Axios";

export function* GetAllExpenses() {
  try {
    const response = yield Axios.get(`/invoice/api/v1/expense/business/get/`);
    if (response?.status === 200) {
      yield put(getAllExpensesSuccess(response?.data));
    } else {
      yield put(getAllExpensesError(response?.data?.message));
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
    yield put(getAllExpensesError(message));
    yield put(clearMessages());
  }
}
export function* CreateNewExpense() {
  try {
    const response = yield Axios.post(`/invoice/api/v1/expense/create/`);
    if (response?.status === 201) {
      yield put(createNewExpenseSuccess());
    } else {
      yield put(createNewExpenseError(response?.data?.message));
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
    yield put(createNewExpenseError(message));
    yield put(clearMessages());
  }
}
export function* watchGetAllExpenses() {
  yield takeEvery(GET_EXPENSES, GetAllExpenses);
}
export function* watchCreateNewExpense() {
  yield takeEvery(CREATE_NEW_EXPENSE, CreateNewExpense);
}

export default function* rootSaga() {
  yield all([fork(watchGetAllExpenses), fork(watchCreateNewExpense)]);
}

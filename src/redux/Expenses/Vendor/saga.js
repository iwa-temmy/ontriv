import { all, fork, put, takeEvery } from "redux-saga/effects";
import {
  GET_ALL_VENDORS,
  CREATE_NEW_VENDOR,
  getAllVendorsSuccess,
  getAllVendorsError,
  createNewVendorSuccess,
  createNewVendorError,
  clearMessages,
} from "../../actions";

import Axios from "../../../utils/Axios";

export function* GetAllVendors() {
  try {
    const response = yield Axios.get(
      `/invoice/api/v1/expense/vendor/get/business/`
    );
    if (response?.status === 200) {
      yield put(getAllVendorsSuccess(response?.data));
    } else {
      yield put(getAllVendorsError(response?.data?.message));
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
    yield put(getAllVendorsError(message));
    yield put(clearMessages());
  }
}

export function* CreateNewVendor({ payload }) {
  try {
    const response = yield Axios.post(
      `/invoice/api/v1/expense/vendor/create/`,
      payload
    );
    if (response?.status === 201) {
      yield put(createNewVendorSuccess(response?.data));
    } else {
      yield put(createNewVendorError(response?.data?.message));
    }
    yield put(clearMessages());
  } catch (error) {
    let message;
    if (error.response) {
      const errorMessage = error.response.data.phone_number?.[0]
        ? error.response.data.phone_number[0]
        : error.response.data.name?.[0]
        ? error.response.data.name?.[0]
        : error.response.data.email?.[0]
        ? error.response.data.email?.[0]
        : error.response.data.address?.[0]
        ? error.response.data.address?.[0]
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
    yield put(createNewVendorError(message));
    yield put(clearMessages());
  }
}

export function* watchGetAllvendors() {
  yield takeEvery(GET_ALL_VENDORS, GetAllVendors);
}
export function* watchCreateNewVendor() {
  yield takeEvery(CREATE_NEW_VENDOR, CreateNewVendor);
}
export default function* rootSaga() {
  yield all([fork(watchGetAllvendors), fork(watchCreateNewVendor)]);
}

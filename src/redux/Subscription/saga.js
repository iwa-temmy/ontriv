import { put, takeEvery, fork, all, call } from "redux-saga/effects";
import {
  GET_ALL_SUBSCRIPTIONS,
  INITIATE_SUBSCRIPTION,
  GET_ALL_CARDS,
  getAllSubscriptionsSuccess,
  getAllSubscriptionsError,
  initiateSubscriptionSuccess,
  initiateSubscriptionError,
  getAllCardsSuccess,
  getAllCardsError,
  clearMessages,
} from "../actions";
import Axios from "../../utils/Axios";

export function* GetAllSubcriptions() {
  try {
    const response = yield Axios.get(`/invoice/api/v1/invoice/get/user/all/`);
    if (response?.status === 200) {
      yield put(getAllSubscriptionsSuccess(response?.data));
    } else {
      yield put(getAllSubscriptionsError(response?.data?.message));
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
    yield put(getAllSubscriptionsError(message));
    yield put(clearMessages());
  }
}
export function* InitiateSubscription({ payload }) {
  try {
    const response = yield Axios.post(`payment/api/v1/setup-intent/`, payload);
    if (response?.status === 201) {
      console.log(response?.data);
      yield put(initiateSubscriptionSuccess());
    } else {
      yield put(initiateSubscriptionError(response?.data?.message));
    }
    yield put(clearMessages());
  } catch (error) {
    let message;
    if (error.response) {
      const errorMessage = error.response.data?.cvc
        ? `CVC: ${error?.response.data?.cvc?.[0]}`
        : error?.response?.data?.exp_month
        ? `Expiration Month: ${error?.response?.data?.exp_month?.[0]}`
        : error?.response.data?.exp_year
        ? `Expiration Year: ${error?.response?.data?.exp_year?.[0]}`
        : error?.response?.data?.number
        ? `Card Number: ${error?.response?.data?.payment_date?.[0]}`
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
    yield put(initiateSubscriptionError(message));
    yield put(clearMessages());
  }
}
export function* GetAllCards() {
  try {
    const response = yield Axios.get(`/payment/api/v1/list-cards/`);
    if (response?.status === 200) {
      yield put(getAllCardsSuccess(response?.data));
    } else {
      yield put(getAllCardsError(response?.data?.message));
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
    yield put(getAllCardsError(message));
    yield put(clearMessages());
  }
}

export function* watchGetAllSubscriptions() {
  yield takeEvery(GET_ALL_SUBSCRIPTIONS, GetAllSubcriptions);
}
export function* watchInitiateSubscription() {
  yield takeEvery(INITIATE_SUBSCRIPTION, InitiateSubscription);
}
export function* watchGetAllCards() {
  yield takeEvery(GET_ALL_CARDS, GetAllCards);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetAllSubscriptions),
    fork(watchInitiateSubscription),
    fork(watchGetAllCards),
  ]);
}

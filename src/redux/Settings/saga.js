import { put, takeEvery, fork, all, call } from "redux-saga/effects";
import Axios from "../../utils/Axios";
import {
  RESET_PASSWORD,
  GET_BUSINESS_DETAILS,
  UPDATE_BUSINESS_DETAILS,
  CHANGE_BUSINESS_LOGO,
  CHANGE_PROFILE_IMAGE,
  UPDATE_USER_DETAILS,
  resetPasswordSuccess,
  resetPasswordError,
  clearMessages,
  getBusinessDetailsSuccess,
  getBusinessDetailsError,
  updateBusinessDetailsSuccess,
  updateBusinessDetailsError,
  changeBusinessLogoSuccess,
  changeBusinessLogoError,
  changeProfileImageSuccess,
  changeProfileImageError,
  updateUserDetailsSuccess,
  updateUserDetailsError,

} from "../actions";
import { GetUserDetails } from "../General/saga";


function* resetUserPassword({ payload }) {
  const { credentials } = payload;

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
    yield put(clearMessages());
  } catch (error) {
    let message;
    if (error.response) {
      const errorMessage = error.response.data.new_password1
        ? error.response.data.new_password[0]
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

function* getBusinessDetails() {
  try {
    const response = yield Axios.get(`/business/api/v1/business/`);
    if (response?.status === 200) {
      yield put(getBusinessDetailsSuccess(response?.data));
    } else {
      yield put(getBusinessDetailsError(response?.data?.message));
    }
    yield put(clearMessages());
  } catch (error) {
    let message;
    if (error.response) {
      const errorMessage = error.response.data.new_password1
        ? error.response.data.new_password[0]
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
    yield put(getBusinessDetailsError(message));
    yield put(clearMessages());
  }
}
function* UpdateBusinessDetails({ payload }) {
  const { credentials } = payload;
  try {
    const response = yield Axios.patch(
      `/business/api/v1/business/`,
      credentials
    );
    if (response?.status === 200) {
      yield put(updateBusinessDetailsSuccess());
      yield call(getBusinessDetails);
    } else {
      yield put(updateBusinessDetailsError(response.data.message));
    }
    yield put(clearMessages());
  } catch (error) {
    let message;
    if (error.response) {
      const errorMessage = error?.response?.data.website 
      ? error?.response?.data?.website?.[0] 
      : error.response.data.business_name ? 
      error.response.data.business_name?.[0]
      : error.response.data.address ? 
      error?.response.data?.address?.[0]
      : error?.response?.data.country;
      
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
    yield put(updateBusinessDetailsError(message));
    yield put(clearMessages());
  }
}
function* ChangeBusinessLogo({ payload }) {
  const { credentials } = payload;
  try {
    const response = yield Axios.patch(
      `/business/api/v1/business/`,
      credentials, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    if (response?.status === 200) {
      yield put(changeBusinessLogoSuccess());
      yield call(getBusinessDetails);
    } else {
      yield put(updateBusinessDetailsError(response.data.message));
    }
    yield put(clearMessages());
  } catch (error) {
    let message;
    if (error.response) {
      const errorMessage = error?.response?.data.website 
      ? error?.response?.data?.website?.[0] 
      : error.response.data.business_name ? 
      error.response.data.business_name?.[0]
      : error.response.data.address ? 
      error?.response.data?.address?.[0]
      : error?.response?.data.country;
      
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
    yield put(changeBusinessLogoError(message));
    yield put(clearMessages());
  }
}
function * ChangeProfileImage({payload}){
  const { credentials } = payload;
  try {
    const response = yield Axios.patch(
      `/accounts/api/v1/user/`,
      credentials, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    if (response?.status === 200) {
      yield put(changeProfileImageSuccess());
      yield call(GetUserDetails);
    } else {
      yield put(changeProfileImageError(response.data.message));
    }
    yield put(clearMessages());
  } catch (error) {
    let message;
    if (error.response) {
      const errorMessage = error?.response?.data.website 
      ? error?.response?.data?.website?.[0] 
      : error.response.data.business_name ? 
      error.response.data.business_name?.[0]
      : error.response.data.address ? 
      error?.response.data?.address?.[0]
      : error?.response?.data.country;
      
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
    yield put(changeProfileImageError(message));
    yield put(clearMessages());
  }
}
function* UpdateUserDetails({ payload }) {
  const { credentials } = payload;
  try {
    const response = yield Axios.patch(
      `/accounts/api/v1/user/`,
      credentials
    );
    if (response?.status === 200) {
      yield put(updateUserDetailsSuccess());
      yield call(GetUserDetails);
    } else {
      yield put(updateUserDetailsError(response?.data?.message));
    }
    yield put(clearMessages());
  } catch (error) {
    let message;
    if (error.response) {
      const errorMessage = error?.response?.data?.phone 
      ? error?.response?.data?.phone?.[0] 
      : error?.response?.data?.fullname ? 
      error.response?.data?.fullname?.[0]
      : null
      
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
    yield put(updateUserDetailsError(message));
    yield put(clearMessages());
  }
}


export function* watchResetPassword() {
  yield takeEvery(RESET_PASSWORD, resetUserPassword);
}

export function* watchUpdateBusinessDetails() {
  yield takeEvery(UPDATE_BUSINESS_DETAILS, UpdateBusinessDetails);
}

export function* watchGetBusinessDetails() {
  yield takeEvery(GET_BUSINESS_DETAILS, getBusinessDetails);
}
export function* watchChangeBusinessLogo(){
  yield takeEvery(CHANGE_BUSINESS_LOGO, ChangeBusinessLogo)
}
export function* watchChangeProfileImage(){
  yield takeEvery(CHANGE_PROFILE_IMAGE, ChangeProfileImage)
}
export function* watchUpdateUserDetails(){
  yield takeEvery(UPDATE_USER_DETAILS, UpdateUserDetails)
}

export default function* rootSaga() {
  yield all([
    fork(watchResetPassword),
    fork(watchUpdateBusinessDetails),
    fork(watchGetBusinessDetails),
    fork(watchChangeBusinessLogo),
    fork(watchChangeProfileImage),
    fork(watchUpdateUserDetails)
  ]);
}

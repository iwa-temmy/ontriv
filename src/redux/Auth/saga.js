import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { setCurrentUser } from '../../utils/helper';
import { Axios } from '../../utils/helper';

import {
    LOGIN_USER,
    REGISTER_USER,
    LOGOUT_USER,
    FORGOT_PASSWORD,
    loginUserSuccess,
    loginUserError,
    registerUserSuccess,
    registerUserError,
    forgotPasswordSuccess,
    forgotPasswordError,

} from '../actions';

function* register({ payload }) {
    const { data } = payload;
    console.log(data);
    try {
        const response = yield Axios.post(`/auth/register`, data)
        if (response.data.success) {
            yield put(registerUserSuccess(response.data.message));
            window.location.href = `/auth/verify-token`;
        } else {
            yield put(registerUserError(response.data.message));
        }
    } catch (error) {
        console.log(error)
        console.log(error.response)
        let message;
        if (error.response) {
            switch (error.response.status) {
                case 500:
                    message = 'Internal Server Error';
                    break;
                case 404:
                    message = 'Not found';
                    break;
                case 401:
                    message = 'Invalid credentials';
                    break;
                default:
                    message = 'Operation failed. Try again later...';
            }
        }
        else if (error.message) {
            message = error.message;
        }
        console.log(message)
        yield put(registerUserError(message));
    }
}

function* login({ payload }) {
    try {
        const response = yield Axios.post('/auth/login', payload.user);
        console.log(response.data);
        if (response.data.success) {
            setCurrentUser(response.data.data)
            yield put(loginUserSuccess(response.data));
            if (response.data.data.user.role === 'superadmin') {
                window.location.href = '/overview';
            } else {
                window.location.href = '/overview';
            }
            yield put(loginUserError(response.data.message));
        } else {
            yield put(loginUserError(response.data.message));
        }
    } catch (error) {
        console.log(error.response.data.message)
        // const {message} = erroresponse.data;
        let message;
        if (error.response) {
            message = error.response.data.message;
            // switch (error.response.status) {
            //   case 500:
            //     message = 'Internal Server Error';
            //     break;
            //   case 404:
            //     message = error.response.data.message;
            //     break;
            //   case 401:
            //     message = 'Invalid credentials';
            //     break;
            //   default:  
            //       message= 'Login failed. Try again later...'
            // }
        } else if (error.message) {
            message = 'Login failed. Try again later...';
        }
        yield put(loginUserError(message));
    }
}

function* forgotPassword({ payload }) {
    console.log(payload);

    try {
        const response = yield Axios.post('/auth/forgot-password', {
            payload
        });
        console.log(response);
        if (response.data.success) {
            yield put(forgotPasswordSuccess(response.data.message));
            window.location.href = '/auth/verify-password-token';

        } else {
            yield put(forgotPasswordError(response.data.message));
        }
    } catch (error) {
        console.log(error);
        console.log(error.response);
        let message;
        if (error.response) {
            message = error.response.data.message
        }
        else if (error.message) {
            message = error.message;
        }
        console.log(message);
        yield put(forgotPasswordError(message));
    }
}


function* logout({ payload }) {
    // const { history } = payload;
    yield setCurrentUser();
    window.location.href = '/app';
}





export function* watchRegisterUser() {

    yield takeEvery(REGISTER_USER, register);
}
export function* watchLoginUser() {

    yield takeEvery(LOGIN_USER, login);
}
export function* watchLogoutUser() {

    yield takeEvery(LOGOUT_USER, logout);
}
export function* watchForgotPassword() {
    yield takeEvery(FORGOT_PASSWORD, forgotPassword);
}


export default function* rootSaga() {
    yield all([
        fork(watchLoginUser),
        fork(watchLogoutUser),
        fork(watchRegisterUser),
        fork(watchForgotPassword),
    ]);
}

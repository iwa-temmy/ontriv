import { SCHEDULEPOST, scheduledPostSuccess, scheduledPostError, clearMessages, getOneClientPostSuccess, getOneClientPostError, GET_ONECLIENTPOST } from "../../actions";
import Axios from "../../../utils/Axios";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";


export function* GetOneClientPost({ payload }) {
    const { id } = payload;
    try {
      const response = yield Axios.get(`client/api/v1/user/${id}/posts/`);
      if (response?.status === 200) {
        yield put(getOneClientPostSuccess(response?.data));
      } else {
        yield put(getOneClientPostError(response?.data?.message));
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
      yield put(getOneClientPostError(message));
      yield put(clearMessages());
    }
  }


export function* SchedulePost({ payload,id }) {
    try {
        const response = yield Axios.post(`/client/api/v1/post/create/`, payload)
        console.log(response,'saggg')
        if (response?.status === 200) {
            yield put(scheduledPostSuccess(response.data));
            yield call(GetOneClientPost);
        } else {
            yield put(scheduledPostError(response?.data?.message))
        }
        yield put(clearMessages())
    } catch (error) {
        let message;
        if (error.response) {
            const errorMessage = error.response.data
            // console.log(errorMessage, 'error msg from saga')
            // console.log(error.response.statusText, 'texterro from saga')
            switch (error?.response?.status) {
                case 500:
                    message = "Internal Server Error"
                    break;
                case 404:
                    message = "Not found";
                    break;
                case 401:
                    message = "Invalid credentials";
                    break;
                case 400:
                    message = '400 error';
                    // message = errorMessage;
                    break;
                default:
                    message = "cannot post"
                // message = error.response.statusText;
            }
        } else if (error.message) {
            message = error.message;
        }
        yield put(scheduledPostError(message))
        yield put(clearMessages())
    }
}

export function* watchGetClientPost() {
    yield takeEvery(GET_ONECLIENTPOST, GetOneClientPost );
  }

export function* watchSchedulePost() {
    yield takeEvery(SCHEDULEPOST, SchedulePost);
}

export default function* rootSaga() {
    yield all([
        fork(watchSchedulePost),
        fork(watchGetClientPost)
    ]);
}
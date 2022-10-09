import { SCHEDULEPOST, scheduledPostSuccess, scheduledPostError, clearMessages } from "../../actions";
import Axios from "../../../utils/Axios";
import { all, fork, put, takeEvery } from "redux-saga/effects";


export function* SchedulePost({ payload }) {
    console.log(payload,'from saga')
    try {
        const response = yield Axios.post(`/client/api/v1/post/create/`, payload)
        if (response?.status === 201) {
            console.log(response?.data,'from saga');
            yield put(scheduledPostSuccess())
        } else {
            yield put(scheduledPostError(response?.data?.message))
        }
        yield put(clearMessages())
    } catch (error) {
        let message;
        if (error.response) {
            const errorMessage = error.response.data
             console.log(errorMessage,'error msg from saga')
             console.log(error.response.statusText,'texterro from saga')
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

export function* watchSchedulePost() {
    yield takeEvery(SCHEDULEPOST, SchedulePost);
  }

  export default function* rootSaga() {
    yield all([
      fork(watchSchedulePost),
    ]);
  }
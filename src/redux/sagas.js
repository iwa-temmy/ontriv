import { all } from 'redux-saga/effects';
import auth from './Auth/saga';
import client from './Client/saga';
import settings from "./Settings/saga"

export default function* rootSaga() {
  yield all([
   auth(),
   client(),
   settings()
  ]);
}

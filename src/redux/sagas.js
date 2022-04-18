import { all } from 'redux-saga/effects';
import auth from './Auth/saga';
import client from './Client/saga';

export default function* rootSaga() {
  yield all([
   auth(),
   client()
  ]);
}

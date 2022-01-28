import { all } from 'redux-saga/effects';
import auth from './Auth/saga'

export default function* rootSaga() {
  yield all([
   auth()
  ]);
}

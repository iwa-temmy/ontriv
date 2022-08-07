import { all } from 'redux-saga/effects';
import auth from './Auth/saga';
import client from './Client/saga';
import settings from "./Settings/saga"
import general from "./General/saga";
import invoice from "./Invoices/saga";
import oneInvoice from "./Invoices/OneInvoice/saga";

export default function* rootSaga() {
  yield all([
   auth(),
   client(),
   settings(),
   general(),
   invoice(),
   oneInvoice(),
  ]);
}

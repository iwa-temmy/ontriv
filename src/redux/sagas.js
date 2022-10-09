import { all } from "redux-saga/effects";
import auth from "./Auth/saga";
import client from "./Client/saga";
import settings from "./Settings/saga";
import general from "./General/saga";
import invoice from "./Invoices/saga";
import oneInvoice from "./Invoices/OneInvoice/saga";
import expense from "./Expenses/saga";
import vendor from "./Expenses/Vendor/saga"
import schedule from "./Schedule/saga"
import getOneClient from "./Schedule/oneClientPost/saga"
import schedulePost from "./Schedule/schedulePost/saga"

export default function* rootSaga() {
  yield all([
    auth(),
    client(),
    settings(),
    general(),
    invoice(),
    oneInvoice(),
    expense(),
    vendor(),
    schedule(),
    getOneClient(),
    schedulePost(),
  ]);
}

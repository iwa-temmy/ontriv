import { combineReducers } from 'redux';
import auth from './Auth/reducer';
import nav from './Nav/reducer';
import client from './Client/reducer'
import settings from "./Settings/reducer";
import general from "./General/reducer";
import invoice from "./Invoices/reducer";
import expense from "./Expenses/reducer";
import oneInvoice from "./Invoices/OneInvoice/reducer";
import vendors from './Expenses/Vendor/reducer';


const Reducers = combineReducers({
    auth,
    nav,
    client,
    settings,
    general,
    invoice,
    expense,
    oneInvoice,
    vendors,
});

export default Reducers;
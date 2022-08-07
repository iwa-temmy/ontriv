import {
  GET_ONE_INVOICE,
  GET_ONE_INVOICE_SUCCESS,
  GET_ONE_INVOICE_ERROR,
  GET_ONE_INVOICE_SETTINGS,
  GET_ONE_INVOICE_SETTINGS_SUCCESS,
  GET_ONE_INVOICE_SETTINGS_ERROR,
} from "../../actions";

export const getOneInvoice = (id) => ({
  type: GET_ONE_INVOICE,
  payload: { id },
});

export const getOneInvoiceSuccess = (invoice) => ({
  type: GET_ONE_INVOICE_SUCCESS,
  payload: invoice,
});

export const getOneInvoiceError = (error) => ({
  type: GET_ONE_INVOICE_ERROR,
  payload: error,
});

export const getOneInvoiceSetting = (id) => ({
  type: GET_ONE_INVOICE_SETTINGS,
  payload: { id },
});

export const getOneInvoiceSettingSuccess = (settings) => ({
  type: GET_ONE_INVOICE_SETTINGS_SUCCESS,
  payload: settings,
});

export const getOneInvoiceSettingError = (error) => ({
  type: GET_ONE_INVOICE_SETTINGS_ERROR,
  payload: { error },
});

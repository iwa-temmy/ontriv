import {
  GET_INVOICES,
  GET_INVOICES_SUCCESS,
  GET_INVOICES_ERROR,
  GET_ONE_INVOICE,
  GET_ONE_INVOICE_SUCCESS,
  GET_ONE_INVOICE_ERROR,
  CREATE_NEW_INVOICE,
  CREATE_NEW_INVOICE_SUCCESS,
  CREATE_NEW_INVOICE_ERROR,
  GET_ONE_INVOICE_SETTINGS,
  GET_ONE_INVOICE_SETTINGS_SUCCESS,
  GET_ONE_INVOICE_SETTINGS_ERROR,
} from "../actions";

export const getAllInvoices = () => ({
  type: GET_INVOICES,
});

export const getAllInvoicesSuccess = (invoices) => ({
  type: GET_INVOICES_SUCCESS,
  payload: invoices,
});

export const getAllInvoicesError = (error) => ({
  type: GET_INVOICES_ERROR,
  payload: { error },
});

export const createNewInvoice = (credentials) => ({
  type: CREATE_NEW_INVOICE,
  payload: { credentials },
});

export const createNewInvoiceSuccess = () => ({
  type: CREATE_NEW_INVOICE_SUCCESS,
  payload: "Invoice Created Successfully",
});

export const createNewInvoiceError = (error) => ({
  type: CREATE_NEW_INVOICE_ERROR,
  payload: error,
});

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
  payload: {id}
});

export const getOneInvoiceSettingSuccess = (settings) => ({
  type: GET_ONE_INVOICE_SETTINGS_SUCCESS,
  payload: settings,
});

export const getOneInvoiceSettingError = (error) => ({
  type: GET_ONE_INVOICE_SETTINGS_ERROR,
  payload: { error },
});

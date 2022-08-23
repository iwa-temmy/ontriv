import {
  GET_INVOICES,
  GET_INVOICES_SUCCESS,
  GET_INVOICES_ERROR,
  CREATE_NEW_INVOICE,
  CREATE_NEW_INVOICE_SUCCESS,
  CREATE_NEW_INVOICE_ERROR,
  DELETE_INVOICE,
  DELETE_INVOICE_SUCCESS,
  DELETE_INVOICE_ERROR,
  REQUEST_PAYOUT,
  REQUEST_PAYOUT_SUCCESS,
  REQUEST_PAYOUT_ERROR,
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

export const deleteInvoice = (id) => ({
  type: DELETE_INVOICE,
  payload: id,
});

export const deleteInvoiceSuccess = () => ({
  type: DELETE_INVOICE_SUCCESS,
  payload: "Invoice Deleted Successfully",
});

export const deleteInvoiceError = (error) => ({
  type: DELETE_INVOICE_ERROR,
  payload: error,
});

export const requestPayout = (credentials) => ({
  type: REQUEST_PAYOUT,
  payload: credentials,
});

export const requestPayoutSuccess = () => ({
  type: REQUEST_PAYOUT_SUCCESS,
  payload: "Request Payout Successfully",
});

export const requestPayoutError = (error) => ({
  type: REQUEST_PAYOUT_ERROR,
  payload: error,
});

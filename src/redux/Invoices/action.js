import {
  GET_INVOICES,
  GET_INVOICES_SUCCESS,
  GET_INVOICES_ERROR,
  CREATE_NEW_INVOICE,
  CREATE_NEW_INVOICE_SUCCESS,
  CREATE_NEW_INVOICE_ERROR,
  DELETE_ONE_INVOICE,
  DELETE_ONE_INVOICE_SUCCESS,
  DELETE_ONE_INVOICE_ERROR,
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
  type: DELETE_ONE_INVOICE,
  payload: id,
});

export const deleteInvoiceSuccess = () => ({
  type: DELETE_ONE_INVOICE_SUCCESS,
  payload: "Invoice Deleted Successfully",
});

export const deleteInvoiceError = (error) => ({
  type: DELETE_ONE_INVOICE_ERROR,
  payload: error,
});



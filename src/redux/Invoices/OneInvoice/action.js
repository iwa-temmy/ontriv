import {
  GET_ONE_INVOICE,
  GET_ONE_INVOICE_SUCCESS,
  GET_ONE_INVOICE_ERROR,
  GET_ONE_INVOICE_SETTINGS,
  GET_ONE_INVOICE_SETTINGS_SUCCESS,
  GET_ONE_INVOICE_SETTINGS_ERROR,
  UPDATE_ONE_INVOICE_SETTINGS,
  UPDATE_ONE_INVOICE_SETTINGS_SUCCESS,
  UPDATE_ONE_INVOICE_SETTINGS_ERROR,
  RECORD_ONE_INVOICE_PAYMENT,
  RECORD_ONE_INVOICE_PAYMENT_SUCCESS,
  RECORD_ONE_INVOICE_PAYMENT_ERROR,
  DUPLICATE_ONE_INVOICE,
  DUPLICATE_ONE_INVOICE_SUCCESS,
  DUPLICATE_ONE_INVOICE_ERROR,
} from "../../actions";

export const getOneInvoice = (id) => ({
  type: GET_ONE_INVOICE,
  payload: { id },
});

export const getOneInvoiceSuccess = (invoice) => ({
  type: GET_ONE_INVOICE_SUCCESS,
  payload: { invoice: invoice, message: "Successful Request" },
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

export const updateOneInvoiceSetting = (credentials) => ({
  type: UPDATE_ONE_INVOICE_SETTINGS,
  payload: credentials,
});

export const updateOneInvoiceSettingSuccess = (response) => ({
  type: UPDATE_ONE_INVOICE_SETTINGS_SUCCESS,
  payload: { message: "Invoice Settings Updated Successfully", data: response },
});

export const updateOneInvoiceSettingError = (error) => ({
  type: UPDATE_ONE_INVOICE_SETTINGS_ERROR,
  payload: error,
});
export const recordOneInvoicePayment = (credentials) => ({
  type: RECORD_ONE_INVOICE_PAYMENT,
  payload: credentials,
});
export const recordOneInvoicePaymentSuccess = () => ({
  type: RECORD_ONE_INVOICE_PAYMENT_SUCCESS,
  payload: "Payment Recorded Successfully",
});
export const recordOneInvoicePaymentError = (error) => ({
  type: RECORD_ONE_INVOICE_PAYMENT_ERROR,
  payload: error,
});
export const duplicateOneInvoice = (credentials) => ({
  type: DUPLICATE_ONE_INVOICE,
  payload: credentials,
});
export const duplicateOneInvoiceSuccess = () => ({
  type: DUPLICATE_ONE_INVOICE_SUCCESS,
  payload: "Invoice Duplicated Successfully",
});
export const duplicateOneInvoiceError = (error) => ({
  type: DUPLICATE_ONE_INVOICE_ERROR,
  payload: error,
});

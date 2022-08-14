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
  RECORD_ONE_INVOICE_PAYMENT_ERROR,
  RECORD_ONE_INVOICE_PAYMENT_SUCCESS,
  RESET_MESSAGE,
} from "../../actions";

const intialState = {
  getOneInvoiceLoading: false,
  updateOneInvoiceSettingLoading: false,
  updateOneInvoiceError: false,
  recordPaymentLoading: false,
  getOneInvoiceError: "",
  getOneInvoiceSettingError: "",
  updateOneInvoiceSettingError: "",
  recordPaymentError: "",
  details: {},
  message: "",
  invoiceSetting: {},
};

const oneInvoiceReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_ONE_INVOICE:
      return {
        ...state,
        getOneInvoiceLoading: true,
      };
    case GET_ONE_INVOICE_SUCCESS:
      return {
        ...state,
        getOneInvoiceLoading: false,
        details: action.payload,
      };
    case GET_ONE_INVOICE_ERROR:
      return {
        ...state,
        getOneInvoiceLoading: false,
        getOneInvoiceError: action.payload,
      };

    case GET_ONE_INVOICE_SETTINGS:
      return {
        ...state,
      };
    case GET_ONE_INVOICE_SETTINGS_SUCCESS:
      return {
        ...state,
        invoiceSetting: action.payload,
      };
    case GET_ONE_INVOICE_SETTINGS_ERROR:
      return {
        ...state,
        getOneInvoiceSettingError: action.payload,
      };
    case UPDATE_ONE_INVOICE_SETTINGS:
      return {
        ...state,
        updateOneInvoiceSettingLoading: true,
      };
    case UPDATE_ONE_INVOICE_SETTINGS_SUCCESS:
      return {
        ...state,
        updateOneInvoiceSettingLoading: false,
        message: action.payload.message,
        invoiceSetting: action.payload.data,
      };
    case UPDATE_ONE_INVOICE_SETTINGS_ERROR:
      return {
        ...state,
        updateOneInvoiceSettingLoading: false,
        updateOneInvoiceSettingError: action.payload,
      };
    case RECORD_ONE_INVOICE_PAYMENT:
      return {
        ...state,
        recordPaymentLoading: true,
      };
    case RECORD_ONE_INVOICE_PAYMENT_SUCCESS:
      return {
        ...state,
        recordPaymentLoading: false,
        message: action.payload,
      };
    case RECORD_ONE_INVOICE_PAYMENT_ERROR:
      return {
        ...state,
        recordPaymentLoading: false,
        recordPaymentError: action.payload,
      };
    case RESET_MESSAGE:
      return {
        ...state,
        getOneInvoiceError: "",
        getOneInvoiceSettingError: "",
        updateOneInvoiceSettingError: "",
        recordPaymentError: "",
        message: "",
      };
    default:
      return state;
  }
};

export default oneInvoiceReducer;

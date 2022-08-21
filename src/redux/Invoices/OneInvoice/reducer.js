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
  DUPLICATE_ONE_INVOICE,
  DUPLICATE_ONE_INVOICE_SUCCESS,
  DUPLICATE_ONE_INVOICE_ERROR,
  RESET_MESSAGE,
} from "../../actions";

const intialState = {
  getOneInvoiceLoading: false,
  updateOneInvoiceSettingLoading: false,
  updateOneInvoiceError: false,
  recordPaymentLoading: false,
  duplicateInvoiceLoading: false,
  getOneInvoiceError: "",
  getOneInvoiceSettingError: "",
  updateOneInvoiceSettingError: "",
  recordPaymentError: "",
  duplicateInvoiceError: "",
  details: {},
  message: {
    updateSettings: "",
    recordPayment: "",
    duplicateInvoice: "",
    getOneInvoice: "",
  },
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
        details: action.payload?.invoice,
        message: { ...state?.message, getOneInvoice: action?.payload?.message },
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
        getOneInvoiceSettingError: action?.payload,
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
        message: { ...state?.message, updateSetting: action?.payload },
        invoiceSetting: action?.payload?.invoice?.data,
      };
    case UPDATE_ONE_INVOICE_SETTINGS_ERROR:
      return {
        ...state,
        updateOneInvoiceSettingLoading: false,
        updateOneInvoiceSettingError: action?.payload,
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
        message: { ...state?.message, recordPayment: action?.payload },
      };
    case RECORD_ONE_INVOICE_PAYMENT_ERROR:
      return {
        ...state,
        recordPaymentLoading: false,
        recordPaymentError: action?.payload,
      };
    case DUPLICATE_ONE_INVOICE:
      return {
        ...state,
        duplicateInvoiceLoading: true,
      };
    case DUPLICATE_ONE_INVOICE_SUCCESS:
      return {
        ...state,
        duplicateInvoiceLoading: false,
        message: {
          ...state?.message,
          duplicateInvoice: action?.payload?.message,
        },
      };
    case DUPLICATE_ONE_INVOICE_ERROR:
      return {
        ...state,
        duplicateInvoiceLoading: false,
        duplicateInvoiceError: "",
      };
    case RESET_MESSAGE:
      return {
        ...state,
        getOneInvoiceError: "",
        getOneInvoiceSettingError: "",
        updateOneInvoiceSettingError: "",
        recordPaymentError: "",
        duplicateInvoiceError: "",
        message: {
          updateSettings: "",
          recordPayment: "",
          duplicateInvoice: "",
          getOneInvoice: "",
        },
      };
    default:
      return state;
  }
};

export default oneInvoiceReducer;

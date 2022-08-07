import {
  GET_ONE_INVOICE,
  GET_ONE_INVOICE_SUCCESS,
  GET_ONE_INVOICE_ERROR,
  GET_ONE_INVOICE_SETTINGS,
  GET_ONE_INVOICE_SETTINGS_SUCCESS,
  GET_ONE_INVOICE_SETTINGS_ERROR,
  RESET_MESSAGE,
} from "../../actions";

const intialState = {
  getOneInvoiceLoading: false,
  getOneInvoiceError: "",
  details: {},
  getOneInvoiceSettingError: false,
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
    case RESET_MESSAGE:
      return {
        ...state,
        getOneInvoiceError: "",
        getOneInvoiceSettingError: "",
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
    default:
      return state;
  }
};

export default oneInvoiceReducer;

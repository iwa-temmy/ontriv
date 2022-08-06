import {
  GET_INVOICES,
  GET_INVOICES_SUCCESS,
  GET_INVOICES_ERROR,
  GET_ONE_INVOICE,
  GET_ONE_INVOICE_SUCCESS,
  GET_ONE_INVOICE_ERROR,
  RESET_MESSAGE,
  CREATE_NEW_INVOICE,
  CREATE_NEW_INVOICE_SUCCESS,
  CREATE_NEW_INVOICE_ERROR,
  GET_ONE_INVOICE_SETTINGS,
  GET_ONE_INVOICE_SETTINGS_SUCCESS,
  GET_ONE_INVOICE_SETTINGS_ERROR,
} from "../actions";

const intialState = {
  getInvoiceLoading: false,
  getInvoiceError: "",
  message: "",
  invoices: [],
  createInvoiceLoading: false,
  createInvoiceError: "",
  getOneInvoiceLoading: false,
  getOneInvoiceError: "",
  oneInvoice: {},
  getOneInvoiceSettingError: false,
  oneInvoiceSetting: {}
};
const invoicesReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_INVOICES:
      return {
        ...state,
        getInvoiceLoading: true,
      };
    case GET_INVOICES_SUCCESS:
      return {
        ...state,
        getInvoiceLoading: false,
        invoices: action.payload,
      };
    case GET_INVOICES_ERROR:
      return {
        ...state,
        getInvoiceLoading: false,
        getInvoiceError: action.payload.error,
      };
    case GET_ONE_INVOICE:
      return {
        ...state,
        getOneInvoiceLoading: true,
      }
    case GET_ONE_INVOICE_SUCCESS:
      return {
        ...state,
        getOneInvoiceLoading: false,
        oneInvoice: action.payload
      }
    case GET_ONE_INVOICE_ERROR:
      return {
        ...state,
        getOneInvoiceLoading: false,
        getOneInvoiceError: action.payload
      }
    case CREATE_NEW_INVOICE:
      return {
        ...state,
        createInvoiceLoading: true,
      };
    case CREATE_NEW_INVOICE_SUCCESS:
      return {
        ...state,
        createInvoiceLoading: false,
        message: action.payload,
      };
    case CREATE_NEW_INVOICE_ERROR:
      return {
        ...state,
        createInvoiceLoading: false,
        createInvoiceError: action.payload
      };
    case GET_ONE_INVOICE_SETTINGS: 
     return {
      ...state
     }
    case GET_ONE_INVOICE_SETTINGS_SUCCESS:
      return {
        ...state, 
        oneInvoiceSetting: action.payload
      }
    case GET_ONE_INVOICE_SETTINGS_ERROR:
      return {
        ...state,
        getOneInvoiceSettingError: action.payload
      }
    case RESET_MESSAGE:
      return {
        ...state,
        getInvoiceError: "",
        message: "",
        createInvoiceError:"",
        getOneInvoiceError: ""
      };

    default:
      return state;
  }
};

export default invoicesReducer;

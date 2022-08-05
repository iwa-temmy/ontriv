import {
  GET_INVOICES,
  GET_INVOICES_SUCCESS,
  GET_INVOICES_ERROR,
  RESET_MESSAGE,
  CREATE_NEW_INVOICE,
  CREATE_NEW_INVOICE_SUCCESS,
  CREATE_NEW_INVOICE_ERROR,
} from "../actions";

const intialState = {
  getInvoiceLoading: false,
  getInvoiceError: "",
  message: "",
  invoices: [],
  createInvoiceLoading: false,
  createInvoiceError: "",
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
    case RESET_MESSAGE:
      return {
        ...state,
        getInvoiceError: "",
        message: "",
        createInvoiceError:""
      };

    default:
      return state;
  }
};

export default invoicesReducer;

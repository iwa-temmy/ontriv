import {
  GET_INVOICES,
  GET_INVOICES_SUCCESS,
  GET_INVOICES_ERROR,
  RESET_MESSAGE,
  CREATE_NEW_INVOICE,
  CREATE_NEW_INVOICE_SUCCESS,
  CREATE_NEW_INVOICE_ERROR,
  DELETE_ONE_INVOICE,
  DELETE_ONE_INVOICE_SUCCESS,
  DELETE_ONE_INVOICE_ERROR,
} from "../actions";

const intialState = {
  getInvoiceLoading: false,
  createInvoiceLoading: false,
  deleteInvoiceLoading: true,
  getInvoiceError: "",
  message: {
    createInvoice: "",
    deleteInvoice: "",
  },
  invoices: [],
  createInvoiceError: "",
  deleteInvoiceError: "",
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
        message: { ...state?.message, createInvoice: action.payload },
      };
    case CREATE_NEW_INVOICE_ERROR:
      return {
        ...state,
        createInvoiceLoading: false,
        createInvoiceError: action.payload,
      };
    case DELETE_ONE_INVOICE:
      return {
        ...state,
        deleteInvoiceLoading: true,
      };
    case DELETE_ONE_INVOICE_SUCCESS:
      return {
        ...state,
        deleteInvoiceLoading: false,
        message: { ...state?.message, deleteInvoice: action.payload },
      };
    case DELETE_ONE_INVOICE_ERROR:
      return {
        ...state,
        deleteInvoiceLoading: false,
        deleteInvoiceError: action.payload,
      };

    case RESET_MESSAGE:
      return {
        ...state,
        getInvoiceError: "",
        message: { createInvoice: "", deleteInvoice: "" },
        createInvoiceError: "",
      };
    default:
      return state;
  }
};

export default invoicesReducer;

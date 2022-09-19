import {
  GET_INVOICES,
  GET_INVOICES_SUCCESS,
  GET_INVOICES_ERROR,
  RESET_MESSAGE,
  CREATE_NEW_INVOICE,
  CREATE_NEW_INVOICE_SUCCESS,
  CREATE_NEW_INVOICE_ERROR,
  DELETE_INVOICE,
  DELETE_INVOICE_SUCCESS,
  DELETE_INVOICE_ERROR,
  REQUEST_PAYOUT,
  REQUEST_PAYOUT_SUCCESS,
  REQUEST_PAYOUT_ERROR,
  GET_PAYOUT_REQUESTS,
  GET_PAYOUT_REQUESTS_SUCCESS,
  GET_PAYOUT_REQUESTS_ERROR,
} from "../actions";

const intialState = {
  loading: {
    getInvoice: false,
    createInvoice: false,
    deleteInvoice: false,
    requestPayout: false,
    getPayoutRequests: false,
  },
  error: {
    getInvoice: "",
    createInvoice: "",
    deleteInvoice: "",
    requestPayout: "",
    getPayoutRequests: "",
  },
  message: {
    createInvoice: "",
    deleteInvoice: "",
    requestPayout: "",
    getPayoutRequests: "",
  },
  invoices: [],
  payoutRequests: [],
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
        error: { ...state?.error, getInvoice: action.payload.error },
      };
    case CREATE_NEW_INVOICE:
      return {
        ...state,
        loading: { ...state?.loading, createInvoice: true },
      };
    case CREATE_NEW_INVOICE_SUCCESS:
      return {
        ...state,
        loading: { ...state?.loading, createInvoice: false },
        message: { ...state?.message, createInvoice: action?.payload },
      };
    case CREATE_NEW_INVOICE_ERROR:
      return {
        ...state,
        loading: { ...state?.loading, createInvoice: false },
        error: { ...state?.error, createInvoice: action?.payload },
      };
    case DELETE_INVOICE:
      return {
        ...state,
        loading: { ...state?.loading, deleteInvoice: true },
      };
    case DELETE_INVOICE_SUCCESS:
      return {
        ...state,
        loading: { ...state?.loading, deleteInvoice: false },
        message: { ...state?.message, deleteInvoice: action.payload },
      };
    case DELETE_INVOICE_ERROR:
      return {
        ...state,
        loading: { ...state?.loading, deleteInvoice: false },
        error: { ...state?.error, deleteInvoice: action?.payload },
      };
    case REQUEST_PAYOUT:
      return {
        ...state,
        loading: { ...state?.loading, requestPayout: true },
      };
    case REQUEST_PAYOUT_SUCCESS:
      return {
        ...state,
        loading: { ...state?.loading, requestPayout: false },
        message: { ...state?.message, requestPayout: action.payload },
      };
    case REQUEST_PAYOUT_ERROR:
      return {
        ...state,
        loading: { ...state?.loading, requestPayout: false },
        error: { ...state?.error, requestPayout: action.payload },
      };
    case GET_PAYOUT_REQUESTS:
      return {
        ...state,
        loading: { ...state?.loading, getPayoutRequests: true },
      };
    case GET_PAYOUT_REQUESTS_SUCCESS:
      return {
        ...state,
        loading: { ...state?.loading, getPayoutRequests: false },
        payoutRequests: action.payload,
      };
    case GET_PAYOUT_REQUESTS_ERROR:
      return {
        ...state,
        loading: { ...state?.loading, getPayoutRequests: false },
        error: { ...state?.error, getPayoutRequests: action.payload },
      };

    case RESET_MESSAGE:
      return {
        ...state,
        message: {
          createInvoice: "",
          deleteInvoice: "",
          requestPayout: "",
          getPayoutRequests: "",
        },
        error: {
          getInvoice: "",
          createInvoice: "",
          deleteInvoice: "",
          requestPayout: "",
          getPayoutRequests: "",
        },
      };
    default:
      return state;
  }
};

export default invoicesReducer;

import {
  GET_INVOICES,
  GET_INVOICES_SUCCESS,
  GET_INVOICES_ERROR,
  RESET_MESSAGE,
} from "../actions";

const intialState = {
  getInvoiceLoading: false,
  getInvoiceError: "",
  message: "",
  invoices: [],
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

    case RESET_MESSAGE:
      return {
        ...state,
        getInvoiceError: "",
        message: "",
      };

    default:
      return state;
  }
};

export default invoicesReducer;

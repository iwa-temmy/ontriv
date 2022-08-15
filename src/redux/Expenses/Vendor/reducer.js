import {
  GET_ALL_VENDORS,
  GET_ALL_VENDORS_SUCCESS,
  GET_ALL_VENDORS_ERROR,
  CREATE_NEW_VENDOR,
  CREATE_NEW_VENDOR_ERROR,
  CREATE_NEW_VENDOR_SUCCESS,
  RESET_MESSAGE,
} from "../../actions";

const initialState = {
  getAllVendorsLoading: false,
  createVendorLoading: false,
  getAllVendorsError: "",
  createNewVendorError: "",
  vendors: [],
  message: "",
};

const vendorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_VENDORS:
      return {
        ...state,
        getAllVendorsLoading: true,
      };
    case GET_ALL_VENDORS_SUCCESS:
      return {
        ...state,
        getAllVendorsLoading: false,
        vendors: action.payload,
      };
    case GET_ALL_VENDORS_ERROR:
      return {
        ...state,
        getAllVendorsLoading: false,
        error: action.payload,
      };
    case CREATE_NEW_VENDOR:
      return {
        ...state,
        createVendorLoading: true,
      };
    case CREATE_NEW_VENDOR_SUCCESS:
      return {
        ...state,
        createVendorLoading: false,
        message: action.payload,
      };
    case CREATE_NEW_VENDOR_ERROR:
      return {
        ...state,
        createVendorLoading: false,
        createNewVendorError: action.payload,
      };
    case RESET_MESSAGE:
      return {
        ...state,
        message: "",
        getAllVendorsError: "",
        createNewVendorError: "",
        getAllVendorsLoading: false,
        createVendorLoading: false,
      };
    default:
      return state;
  }
};

export default vendorsReducer;

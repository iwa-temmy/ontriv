import {
  GET_ALL_VENDORS,
  GET_ALL_VENDORS_SUCCESS,
  GET_ALL_VENDORS_ERROR,
  RESET_MESSAGE,
} from "../../actions";

const initialState = {
  getAllVendorsLoading: false,
  getAllVendorsError: "",
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

      case RESET_MESSAGE:
        return {
          ...state,
          message: "",
          getAllVendorsError: "",
        };
      default:
        return state;
  }
};

export default vendorsReducer;

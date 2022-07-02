import {
  RESET_PASSWORD,
  RESET_PASSWORD_ERROR,
  RESET_PASSWORD_SUCCESS,
  RESET_MESSAGE,
  GET_BUSINESS_DETAILS,
  GET_BUSINESS_DETAILS_SUCCESS,
  GET_BUSINESS_DETAILS_ERROR,
  UPDATE_BUSINESS_DETAILS,
  UPDATE_BUSINESS_DETAILS_SUCCESS,
  UPDATE_BUSINESS_DETAILS_ERROR,
  CHANGE_BUSINESS_LOGO,
  CHANGE_BUSINESS_LOGO_SUCCESS,
  CHANGE_BUSINESS_LOGO_ERROR
} from "../actions";

const settingsReducer = (state = {}, action) => {
  switch (action.type) {
    case RESET_PASSWORD:
      return {
        ...state,
        loading: true,
        resetPasswordError: "",
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    case RESET_PASSWORD_ERROR:
      return {
        ...state,
        loading: false,
        resetPasswordError: action.payload.error,
      };
    case RESET_MESSAGE:
      return {
        ...state,
        resetPasswordError: "",
        message: "",
        updateBusinessDetailsError:""
      };
    case GET_BUSINESS_DETAILS:
      return {
        ...state,
      };
    case GET_BUSINESS_DETAILS_SUCCESS:
      return {
        ...state,
        businessDetails: action?.payload,
      };
    case GET_BUSINESS_DETAILS_ERROR: 
      return {
        ...state,
        message: action.payload
      }
    case UPDATE_BUSINESS_DETAILS:
      return {
        ...state,
        updatingStateLoading: true,
        updateBusinessDetailsError: "",
      };
    case UPDATE_BUSINESS_DETAILS_SUCCESS:
      return {
        ...state,
        updatingStateLoading: false,
        message: action.payload,
      };
    case UPDATE_BUSINESS_DETAILS_ERROR:
      return {
        ...state,
        updatingStateLoading: false,
        updateBusinessDetailsError: action.payload,
      };
    case CHANGE_BUSINESS_LOGO: 
      return {
        ...state,
        changeLogoloading: true,
        changeLogoError: "",
      }
    case CHANGE_BUSINESS_LOGO_SUCCESS:
      return {
        ...state,
        changeLogoloading: false,
        message: action.payload,
      }
    case CHANGE_BUSINESS_LOGO_ERROR:
      return {
        ...state,
        changeLogoloading: false,
        changeLogoError: action.payload
      }
    default:
      return state;
  }
};

export default settingsReducer;

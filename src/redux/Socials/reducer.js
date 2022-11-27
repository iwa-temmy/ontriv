import {
  GET_BUSINESS_SOCIALS_CONNECTION_STATUS,
  GET_BUSINESS_SOCIALS_CONNECTION_STATUS_SUCCESS,
  GET_BUSINESS_SOCIALS_CONNECTION_STATUS_ERROR,
  RESET_MESSAGE,
} from "../actions";

const initialState = {
  loading: {
    getBusinessSocialsConnectionStatus: false,
  },
  error: {
    getBusinessSocialsConnectionStatus: "",
  },
  message: {
    getBusinessSocialsConnectionStatus: "",
  },
  businesssSocialsConnectionStatus: {},
};

const socialsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BUSINESS_SOCIALS_CONNECTION_STATUS:
      return {
        loading: {
          ...state?.loading,
          getBusinessSocialsConnectionStatus: true,
        },
      };
    case GET_BUSINESS_SOCIALS_CONNECTION_STATUS_SUCCESS:
      return {
        loading: {
          ...state?.loading,
          getBusinessSocialsConnectionStatus: false,
        },
        businesssSocialsConnectionStatus: action?.payload.response,
        message: {
          ...state?.message,
          getBusinessSocialsConnectionStatus: action?.payload?.message,
        },
      };
    case GET_BUSINESS_SOCIALS_CONNECTION_STATUS_ERROR:
      return {
        loading: {
          ...state?.loading,
          getBusinessSocialsConnectionStatus: false,
        },
        error: {
          ...state?.error,
          getBusinessSocialsConnectionStatus: action.payload,
        },
      };
    case RESET_MESSAGE:
      return {
        ...state,
        error: {
          getBusinessSocialsConnectionStatus: "",
        },
        message: {
          getBusinessSocialsConnectionStatus: "",
        },
      };
    default:
      return state;
  }
};

export default socialsReducer;

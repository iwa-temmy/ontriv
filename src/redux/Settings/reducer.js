import {
  RESET_PASSWORD,
  RESET_PASSWORD_ERROR,
  RESET_PASSWORD_SUCCESS,
  RESET_MESSAGE,
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
      };
    default:
      return state;
  }
};

export default settingsReducer;

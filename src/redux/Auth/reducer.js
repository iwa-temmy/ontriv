import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGOUT_USER,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR,
  RESET_MESSAGE,
} from "../actions";

const INIT_STATE = {
  accessToken: localStorage.getItem("ontrivUserToken"),
  currentUser: "",
  loading: false,
  registrationError: "",
  loginError: "",
  forgotPasswordError: "",
  message: "",
};

const authReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        loading: true,
        loginError: "",
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload.userInfo,
        message: action.payload?.message,
        accessToken: action.payload.userInfo.accessToken,
        loginError: "",
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        loading: false,
        currentUser: null,
        loginError: action.payload.message
          ? action.payload.message
          : action.payload.error,
      };
    case FORGOT_PASSWORD:
      return { ...state, loading: true, forgotPasswordError: "", message: "" };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
        error: "",
      };
    case FORGOT_PASSWORD_ERROR:
      return {
        ...state,
        loading: false,
        message: "",
        forgotPasswordError: action.payload.message,
      };

    case REGISTER_USER:
      return { ...state, loading: true, registrationError: "" };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
        registrationError: "",
      };
    case REGISTER_USER_ERROR:
      return {
        ...state,
        loading: false,
        message: "",
        registrationError: action.payload,
      };
    case LOGOUT_USER:
      return { ...state, currentUser: null, error: "", message: null };

    case RESET_MESSAGE:
      return {
        ...state,
        registrationError: "",
        loginError: "",
        forgotPasswordError: "",
        message: "",
      };
    default:
      return state;
  }
};

export default authReducer;

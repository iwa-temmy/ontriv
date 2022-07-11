import {
  GET_USER_DETAILS,
  GET_USER_DETAILS_SUCCESS,
  GET_USER_DETAILS_ERROR,
} from "../actions";

const generalReducers = (state = {}, action) => {
  switch (action.type) {
    case GET_USER_DETAILS:
      return {
        ...state,
      };
    case GET_USER_DETAILS_SUCCESS:
      return {
        ...state,
        userDetails: action.payload
      };
    case GET_USER_DETAILS_ERROR:
        return {
            ...state,
            message: action.payload
        }
    default:
      return state;
  }
};

export default generalReducers;

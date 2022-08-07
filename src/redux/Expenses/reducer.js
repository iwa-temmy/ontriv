import {
  GET_EXPENSES,
  GET_EXPENSES_SUCCESS,
  GET_EXPENSES_ERROR,
  RESET_MESSAGE,
} from "../actions";

const intialState = {
  getExpensesLoading: false,
  message: "",
  getExpensesError: "",
  expenses: [],
};

const expenseReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_EXPENSES:
      return {
        ...state,
        getExpensesLoading: true,
      };
    case GET_EXPENSES_SUCCESS:
      return {
        ...state,
        getExpensesLoading: false,
        expenses: action.payload,
      };
    case GET_EXPENSES_ERROR:
      return {
        ...state,
        getExpensesLoading: false,
        getExpensesError: action.payload.error,
      };
    case RESET_MESSAGE:
      return {
        ...state,
        message: "",
        getExpensesError: "",
      };
    default:
      return state;
  }
};

export default expenseReducer;

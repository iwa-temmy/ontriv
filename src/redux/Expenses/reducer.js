import {
  GET_EXPENSES,
  GET_EXPENSES_SUCCESS,
  GET_EXPENSES_ERROR,
  RESET_MESSAGE,
  CREATE_NEW_EXPENSE,
  CREATE_NEW_EXPENSE_SUCCESS,
  CREATE_NEW_EXPENSE_ERROR,
  DELETE_ONE_EXPENSE,
  DELETE_ONE_EXPENSE_ERROR,
  DELETE_ONE_EXPENSE_SUCCESS,
} from "../actions";

const intialState = {
  getExpensesLoading: false,
  createExpenseLoading: false,
  deleteExpenseLoading: false,
  message: {
    createExpense: "",
    deleteExpense: "",
  },
  getExpensesError: "",
  createExpenseError: "",
  deleteExpenseError: "",
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
    case CREATE_NEW_EXPENSE:
      return {
        ...state,
        createExpenseLoading: true,
      };
    case CREATE_NEW_EXPENSE_SUCCESS:
      return {
        ...state,
        createExpenseLoading: false,
        message: { ...state?.message, createExpense: action.payload },
      };
    case CREATE_NEW_EXPENSE_ERROR:
      return {
        ...state,
        createExpenseLoading: false,
        createExpenseError: action.payload,
      };
    case DELETE_ONE_EXPENSE:
      return {
        ...state,
        deleteExpenseLoading: true,
      };
    case DELETE_ONE_EXPENSE_SUCCESS:
      return {
        ...state,
        deleteExpenseLoading: false,
        message: { ...state?.message, deleteExpense: action.payload },
      };
    case DELETE_ONE_EXPENSE_ERROR:
      return {
        ...state,
        deleteExpenseLoading: false,
        deleteExpenseError: action.payload,
      };
    case RESET_MESSAGE:
      return {
        ...state,
        message: {},
        getExpensesError: "",
      };
    default:
      return state;
  }
};

export default expenseReducer;

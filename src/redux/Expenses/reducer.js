import {
  GET_EXPENSES,
  GET_EXPENSES_SUCCESS,
  GET_EXPENSES_ERROR,
  RESET_MESSAGE,
  CREATE_NEW_EXPENSE,
  CREATE_NEW_EXPENSE_SUCCESS,
  CREATE_NEW_EXPENSE_ERROR,
  DELETE_EXPENSE,
  DELETE_EXPENSE_ERROR,
  DELETE_EXPENSE_SUCCESS,
} from "../actions";

const intialState = {
  loading: {
    getExpense: false,
    createExpense: false,
    deleteExpense: false,
  },
  message: {
    createExpense: "",
    deleteExpense: "",
  },
  error: {
    getExpense: "",
    createExpense: "",
    deleteExpense: "",
  },
  expenses: [],
};

const expenseReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_EXPENSES:
      return {
        ...state,
        loading: { ...state?.loading, getExpense: true },
      };
    case GET_EXPENSES_SUCCESS:
      return {
        ...state,
        loading: { ...state?.loading, getExpense: false },
        expenses: action?.payload,
      };
    case GET_EXPENSES_ERROR:
      return {
        ...state,
        loading: { ...state?.loading, getExpense: false },
        error: { ...state?.error, getExpense: action.payload.error },
      };
    case CREATE_NEW_EXPENSE:
      return {
        ...state,
        loading: { ...state?.loading, createExpense: true },
      };
    case CREATE_NEW_EXPENSE_SUCCESS:
      return {
        ...state,
        loading: { ...state?.loading, createExpense: false },
        message: { ...state?.message, createExpense: action.payload },
      };
    case CREATE_NEW_EXPENSE_ERROR:
      return {
        ...state,
        loading: { ...state?.loading, createExpense: false },
        error: { ...state?.error, createExpense: action.payload },
      };
    case DELETE_EXPENSE:
      return {
        ...state,
        loading: { ...state?.loading, deleteExpense: true },
      };
    case DELETE_EXPENSE_SUCCESS:
      return {
        ...state,
        loading: { ...state?.loading, deleteExpense: false },
        message: { ...state?.message, deleteExpense: action.payload },
      };
    case DELETE_EXPENSE_ERROR:
      return {
        ...state,
        loading: { ...state?.loading, deleteExpense: false },
        error: { ...state?.error, deleteError: action.payload },
      };
    case RESET_MESSAGE:
      return {
        ...state,
        loading: {
          getExpense: false,
          createExpense: false,
          deleteExpense: false,
        },
        message: {
          createExpense: "",
          deleteExpense: "",
        },
        error: {
          getExpense: "",
          createExpense: "",
          deleteExpense: "",
        },
      };
    default:
      return state;
  }
};

export default expenseReducer;

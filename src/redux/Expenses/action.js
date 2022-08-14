import {
  GET_EXPENSES,
  GET_EXPENSES_ERROR,
  GET_EXPENSES_SUCCESS,
  CREATE_NEW_EXPENSE,
  CREATE_NEW_EXPENSE_SUCCESS,
  CREATE_NEW_EXPENSE_ERROR,
} from "../actions";

export const getAllExpenses = () => ({
  type: GET_EXPENSES,
});

export const getAllExpensesSuccess = (expenses) => ({
  type: GET_EXPENSES_SUCCESS,
  payload: expenses,
});

export const getAllExpensesError = (error) => ({
  type: GET_EXPENSES_ERROR,
  payload: { error },
});

export const createNewExpense = (credentials) => ({
  type: CREATE_NEW_EXPENSE,
  payload: { credentials },
});

export const createNewExpenseSuccess = () => ({
  type: CREATE_NEW_EXPENSE_SUCCESS,
  payload: "Expense Created Successfully",
});
export const createNewExpenseError = (error) => ({
  type: CREATE_NEW_EXPENSE_ERROR,
  payload: error,
});

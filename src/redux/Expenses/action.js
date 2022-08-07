import { GET_EXPENSES, GET_EXPENSES_ERROR, GET_EXPENSES_SUCCESS } from "../actions";

export const getAllExpenses = () => ({
    type: GET_EXPENSES
});

export const getAllExpensesSuccess = (expenses) => ({
    type: GET_EXPENSES_SUCCESS,
    payload: expenses
})

export const getAllExpensesError = (error) => ({
    type: GET_EXPENSES_ERROR,
    payload: {error}
})
import {GET_INVOICES, GET_INVOICES_SUCCESS, GET_INVOICES_ERROR} from "../actions"

export const getAllInvoices = () => ({
    type: GET_INVOICES
})

export const getAllInvoicesSuccess = (invoices) => ({
    type: GET_INVOICES_SUCCESS,
    payload: invoices
})

export const getAllInvoicesError = (error) => ({
    type: GET_INVOICES_ERROR,
    payload: {error}
})
import {GET_ALL_VENDORS, GET_ALL_VENDORS_ERROR, GET_ALL_VENDORS_SUCCESS } from "../../actions";

export const getAllVendors = () => ({
    type: GET_ALL_VENDORS
});

export const getAllVendorsSuccess = (vendors) => ({
    type: GET_ALL_VENDORS_SUCCESS,
    payload: vendors
});

export const getAllVendorsError = (error) => ({
    type: GET_ALL_VENDORS_ERROR,
    payload: error
})
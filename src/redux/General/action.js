import { GET_USER_DETAILS, GET_USER_DETAILS_SUCCESS, GET_USER_DETAILS_ERROR } from "../actions";

export const getUserDetails = () => ({
    type: GET_USER_DETAILS,
})

export const getUserDetailSuccess = (user_details) => ({
    type: GET_USER_DETAILS_SUCCESS,
    payload: user_details,
})


export const getUserDetailError = (error) => ({
    type: GET_USER_DETAILS_ERROR,
    payload: {error},
})
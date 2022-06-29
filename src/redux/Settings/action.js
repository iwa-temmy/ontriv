import {
  RESET_PASSWORD,
  RESET_PASSWORD_ERROR,
  RESET_PASSWORD_SUCCESS,
  RESET_MESSAGE,
  GET_BUSINESS_DETAILS,
  GET_BUSINESS_DETAILS_SUCCESS,
  GET_BUSINESS_DETAILS_ERROR,
  UPDATE_BUSINESS_DETAILS,
  UPDATE_BUSINESS_DETAILS_ERROR,
  UPDATE_BUSINESS_DETAILS_SUCCESS,
} from "../actions";

export const resetPassword = (credentials) => ({
  type: RESET_PASSWORD,
  payload: { credentials },
});

export const resetPasswordSuccess = () => ({
  type: RESET_PASSWORD_SUCCESS,
  payload: "Password Updated Successfully",
});
export const resetPasswordError = (error) => ({
  type: RESET_PASSWORD_ERROR,
  payload: { error },
});

export const clearMessages = () => ({
  type: RESET_MESSAGE,
});
export const getBusinessDetails = () => ({
  type: GET_BUSINESS_DETAILS,
});
export const getBusinessDetailsSuccess = (businessInfo) => ({
  type: GET_BUSINESS_DETAILS_SUCCESS,
  payload: businessInfo,
});
export const getBusinessDetailsError = (error) => ({
  type: GET_BUSINESS_DETAILS_ERROR,
  payload: { error },
});
export const updateBusinessDetails = (credentials) => ({
  type: UPDATE_BUSINESS_DETAILS,
  payload: { credentials },
});
export const updateBusinessDetailsSuccess = () => ({
  type: UPDATE_BUSINESS_DETAILS_SUCCESS,
  payload: "Business Details Updated Successfully" 
});

export const updateBusinessDetailsError = (error) => ({
  type: UPDATE_BUSINESS_DETAILS_ERROR,
  payload: { error },
});

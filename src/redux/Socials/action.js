import {
  GET_BUSINESS_SOCIALS_CONNECTION_STATUS,
  GET_BUSINESS_SOCIALS_CONNECTION_STATUS_SUCCESS,
  GET_BUSINESS_SOCIALS_CONNECTION_STATUS_ERROR,
} from "../actions";

export const getBusinessSocialsConnectionStatus = (id) => ({
  type: GET_BUSINESS_SOCIALS_CONNECTION_STATUS,
  payload: id,
});

export const getBusinessSocialsConnectionStatusSuccess = (response) => ({
  type: GET_BUSINESS_SOCIALS_CONNECTION_STATUS_SUCCESS,
  payload: { response, message: "Success" },
});

export const getBusinessSocialsConnectionStatusError = (error) => ({
  type: GET_BUSINESS_SOCIALS_CONNECTION_STATUS_ERROR,
  payload: error,
});

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
  CHANGE_BUSINESS_LOGO,
  CHANGE_BUSINESS_LOGO_SUCCESS,
  CHANGE_BUSINESS_LOGO_ERROR,
  CHANGE_PROFILE_IMAGE,
  CHANGE_PROFILE_IMAGE_SUCCESS,
  CHANGE_PROFILE_IMAGE_ERROR,
  UPDATE_USER_DETAILS,
  UPDATE_USER_DETAILS_SUCCESS,
  UPDATE_USER_DETAILS_ERROR,
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
  payload: "Business Details Updated Successfully",
});

export const updateBusinessDetailsError = (error) => ({
  type: UPDATE_BUSINESS_DETAILS_ERROR,
  payload: error,
});

export const changeBusinessLogo = (credentials) => ({
  type: CHANGE_BUSINESS_LOGO,
  payload: { credentials },
});

export const changeBusinessLogoSuccess = () => ({
  type: CHANGE_BUSINESS_LOGO_SUCCESS,
  payload: "Business Logo Updated Successfully",
});

export const changeBusinessLogoError = (error) => ({
  type: CHANGE_BUSINESS_LOGO_ERROR,
  payload: error,
});
export const changeProfileImage = (credentials) => ({
  type: CHANGE_PROFILE_IMAGE,
  payload: { credentials },
});

export const changeProfileImageSuccess = () => ({
  type: CHANGE_PROFILE_IMAGE_SUCCESS,
  payload: "Profile Image Updated Successfully",
});

export const changeProfileImageError = (error) => ({
  type: CHANGE_PROFILE_IMAGE_ERROR,
  payload: error,
});

export const updateUserDetails = (credentials) => ({
  type: UPDATE_USER_DETAILS,
  payload: { credentials },
});

export const updateUserDetailsSuccess = () => ({
  type: UPDATE_USER_DETAILS_SUCCESS,
  payload: "Profile Details Updated Successfully",
});

export const updateUserDetailsError = (error) => ({
  type: UPDATE_USER_DETAILS_ERROR,
  payload: error,
});
